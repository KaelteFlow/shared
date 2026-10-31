import {IFineGradedScope} from "./Scopes";

export type TokenType = "invite" | "session" | "password-reset" | "email-otp" | "web-authn" | "oidc-state" | "upload" | "file";
export interface TokenPayload {
    type: TokenType;

    // Standard Jwt claims
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: string | string[] | undefined;
    exp?: number | undefined;
    nbf?: number | undefined;
    iat?: number | undefined;
    jti?: string | undefined;
}

export interface IInviteToken extends TokenPayload {
    type: "invite";
}

export interface ISessionToken extends TokenPayload {
    type: "session";
    scopes: IFineGradedScope[];
}

export interface IPasswordResetToken extends TokenPayload {
    type: "password-reset";
}

export interface IEmailOTPToken extends TokenPayload {
    type: "email-otp";
}

export interface IWebAuthnToken extends TokenPayload {
    type: "web-authn";
    challenge: string;
}

export interface IOIDCStateToken extends TokenPayload {
    type: "oidc-state";
    nonce: string;
    customer: string;
    redirectTo?: string;
}

export interface IUploadToken extends TokenPayload {
    type: "upload";
    _id: string;
}

export interface IFileToken extends TokenPayload {
    type: "file";
    _id: string;
}