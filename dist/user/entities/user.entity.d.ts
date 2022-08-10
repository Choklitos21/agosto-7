export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    password: string;
    is_active: boolean;
    hashPassword(): Promise<void>;
    logEntity(): void;
}
