import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { AuthModel, Response, User } from '@core/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '@contexts';

interface CustomProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<CustomProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User>({} as User);
    const [permissions, setPermissions] = useState<number[]>([]);
    const [token, setToken] = useState<string>('');
    const [refreshToken, setRefreshToken] = useState<string>('');

    const location = useLocation();
    const prevLocation = useRef(location);

    useEffect(() => {
        prevLocation.current = location;
    }, [location]);

    useEffect(() => {

        localStorage.setItem('token', token || localStorage.getItem('token') || '');

    }, [token]);

    useEffect(() => {

        localStorage.setItem('refreshToken', refreshToken || localStorage.getItem('refreshToken') || '');

    }, [refreshToken]);

    useEffect(() => {

        localStorage.setItem('user', user.systemUserId ? JSON.stringify(user) : (localStorage.getItem('user') || ''));

    }, [user]);


    const navigate = useNavigate();

    const login = async (username: string, password: string) => {

        try {

            if (!username || !password) {
                throw new Error('Username and password are required');
            }

            fetch('http://localhost:8080/api/auth/login', {
                body: JSON.stringify({ email: username, password }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then(res => res.json())
                .then((response: Response<AuthModel>) => {

                    if (!response.success) {
                        alert(response.resultMessage.message);
                        return;
                    }

                    setUser(response.data.user);
                    setPermissions(response.data.user.permissions);

                    if (response.data.token) {
                        setToken(response.data.token);
                    }

                    if (response.data.refreshToken) {
                        setRefreshToken(response.data.refreshToken);
                    }

                    const returnUrl = localStorage.getItem('returnUrl');
                    localStorage.removeItem('returnUrl');

                    setTimeout(() => {
                        navigate(returnUrl ?? '/');
                    }, 500)
                })
                .catch(err => console.error('JSON fetch error:', err))

        } catch (error) {
            console.error('AuthService Login Error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');

        if (prevLocation.current.pathname !== '/auth/login' && prevLocation.current.pathname !== '/403') {
            localStorage.setItem('returnUrl', prevLocation.current.pathname);
        }

        navigate('/auth');
    };

    const hasPermission = (permission: number[] | number) => {

        if (Array.isArray(permission)) {
            return permission.some(p => permissions.includes(p));
        }

        return permissions.includes(permission);
    };

    const getUser = () => {

        return user.systemUserId ? user : JSON.parse(localStorage.getItem('user') || '{}') as User;
    };

    const getPermissions = () => {

        return getUser().permissions;
    }


    return (
        <AuthContext.Provider value={{ getUser, login, logout, hasPermission, getPermissions }}>
            {children}
        </AuthContext.Provider>
    );

};

