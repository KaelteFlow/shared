export interface IAuthCheckMailBody {
    email: string;
    redirectTo?: string;
    captcha: string;
}

export interface IAuthPasswordBody {
    email: string;
    password: string;
    captcha: string;
}

export interface IAuthCodeBody {
    email: string;
    captcha: string;
}

export interface IAuthCodeConfirmBody {
    token: string;
    code: string;
    captcha: string;
}

export interface IAuthPasswordResetBody {
    email: string;
    captcha: string;
}

export interface IAuthPasswordResetConfirmBody {
    token: string;
    password: string;
    captcha: string;
}

export interface IAuthInviteBody {
    token: string;
}

export interface IAuthWebAuthnChallengeBody {
    id: string;
    token: string;
    response: any;
}