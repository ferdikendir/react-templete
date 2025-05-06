import { Department } from "./department";

export interface User {
    systemUserId: string;
    email: string;
    name: string;
    lastName: string;
    displayName?: string;
    permissions: number[];
    username: string;
    departmentId: string;
    department: Department;
}