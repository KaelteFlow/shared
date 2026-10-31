export type UserType = "admin_account" | "account" | "shadow_account"
export const UserTypes: UserType[] = ["admin_account", "account", "shadow_account"];

export interface IUser {
    type: UserType;
    firstName?: string;
    name: string;

    // Contact
    email?: string;
    phone?: string;
    mobile?: string;

    department?: string;
    position?: string;

    // Customer binding
    customer?: string,

    // Auth
    password?: string;
    passwordUpdatedAt?: Date;
    mustChangePassword?: boolean;
    ssoId?: string;

    // Perms + Skills
    roles: string[];
    skills?: string[];

    // TODO: Add user avatars
    avatar: never;
}