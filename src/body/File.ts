import {ICompleteFileUploadPart} from "../definations/File";

export interface ICreateFileUploadBody {
    name: string;
    type: string;
    size: number;
    hash: string;
}

export interface ICompleteFileUploadBody {
    parts: ICompleteFileUploadPart[];
}