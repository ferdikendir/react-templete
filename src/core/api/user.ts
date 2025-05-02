export interface User {
    userId: number;
    email: string;
    name: string;
    lastName: string;
    displayName?: string;
    permissions: number[];
    username: string;
}