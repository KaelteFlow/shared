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

export interface IModulManifestWithDownload extends IModulManifest {
    downloadUrl: string;
    hash: string;
}

export interface IModulIntegrity {
    id: string;
    version: string;
    algorithm: "sha256" | string;
    createdAt: Date | string;
    files: Record<string, string>;
}