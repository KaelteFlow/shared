export interface IFile {
    storage: string;
    name: string;
    type: IFileType;
    size: number;
    hash?: string;
    pHash?: string;
    preview?: string;
    metadata?: Record<string, unknown>;
    user: string;
}

export type FileWithDownload = IFile & {
    download: string;
}

export interface IFileType {
    tag: string;
    type: string;
    ext: string | string[];
    mime: string;
    score?: number;
    pattern?: RegExp;
    zipped?: boolean | string[];
    magic?: number[] | number[][];
}

export interface IUploadFile {
    isMultipart: boolean;
    chunkSize: number;
    parts: IFilePart[];
}

export interface IFilePart {
    part: number;
    start: number;
    end: number;
}

export type UploadFilePart = IFilePart & {
    url: string;
};

export interface ICompleteFileUploadPart {
    part: number;
    etag: string;
}