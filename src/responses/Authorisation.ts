import {AuthMethod} from "../definations/Authorisation";

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