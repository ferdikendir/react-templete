export interface User {
    systemUserId: string;
    email: string;
    name: string;
    lastName: string;
    displayName?: string;
    permissions: number[];
    username: string;

    token?: string;
    refreshToken?: string;
}