import { User } from "./user";

export interface Department {
    departmentId: string;
    name: string;
    users?: User[];
}
