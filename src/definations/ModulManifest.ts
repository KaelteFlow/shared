export interface IModulAuthor {
    name: string;
    email?: string;
    url?: string;
}

export interface IModulManifest {
    id: string;
    name: string;
    version: string;
    description?: string;
    author: string | IModulAuthor | IModulAuthor[];

    requiredBackendVersion?: string;
    requiredFrontendVersion?: string;
    requiredFrameworkVersion?: string;
}