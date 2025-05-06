// src/services/axios.ts
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { refreshToken } from './auth.service';

export const API = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

let isRefreshing = false;
let failedQueue: {
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
}[] = [];

const processQueue = (error: AxiosError, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
};

API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({
                        resolve: (token: string) => {
                            if (originalRequest.headers)
                                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                            resolve(API(originalRequest));
                        },
                        reject,
                    });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const data = await refreshToken();

                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);

                processQueue(null, data.accessToken);

                if (originalRequest.headers) {
                    originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                }

                return API(originalRequest);
            } catch (err) {
                processQueue(err, null);
                // opsiyonel: logout kullanıcı
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);
