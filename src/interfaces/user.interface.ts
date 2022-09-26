import { Auth } from "./auth.interface";

export interface User extends Auth {
    user: string;
    roll: 'cliente' | 'admin';
    phone: number;
    name: string;
    lastName: string;
    secondSurname: string;
    gender: 'femenino' | 'masculino';
    birthDate: string;
}