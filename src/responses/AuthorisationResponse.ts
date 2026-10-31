export type AuthMethod = "password" | "email_otp" | "SSO";
export const AuthMethods: AuthMethod[] = ["password", "email_otp", "SSO"];
export interface IAuthCheckMailResponse {
    method: AuthMethod;
    url?: string;
}

export interface IAuthSessionResponse {
    token: string;
}

export interface IAuthWebAuthnResponse {
    token: string;
    options: PublicKeyCredentialRequestOptionsJSON;
}