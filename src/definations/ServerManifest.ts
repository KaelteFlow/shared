export interface IServerManifest {
    readonly maintenance: boolean;
    readonly maintenanceMessage?: string;

    readonly backendVersion: string;
    readonly requiredFrameworkVersion: string;
    readonly requiredFrontendVersion: string;

    readonly configuration: IAppConfiguration;
    readonly expires: number;
}

export interface IAppConfiguration {
    readonly name: string;
    readonly admin: string;
    readonly adminEmail: string;
    readonly logo?: string;
    readonly turnstileSiteKey: string;
}