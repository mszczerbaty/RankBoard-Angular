import { Authority } from "./authority";

export class User {
    id: number;
    username: string;
    password: string;
    authdata?: string;
    authorities?: Authority[];
}