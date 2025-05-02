import { User } from './user';

export interface AuthContextType {
    getUser: () => User;
    getPermissions: () => number[];
    login: (username: string, password: string) => void;
    logout: () => void;
    hasPermission: (permission: number[] | number) => boolean;
}

export interface LoginResponse {
    user: User;
    token: string;
    refreshToken: string;
}
