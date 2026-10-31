import {IUser} from "../definations/User";

export type CreateUserBody = Omit<IUser, "password" | "passwordUpdatedAt" | "mustChangePassword" | "ssoId" | "roles" | "skills" | "avatar"> & {
    sendInvite?: boolean;
};

export type UpdateUserBody = Partial<Omit<CreateUserBody, "sendInvite">>;