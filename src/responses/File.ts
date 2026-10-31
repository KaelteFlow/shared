import {IDefaultResponse} from "./helper/DefaultResponse";
import {FileWithDownload, IUploadFile, UploadFilePart} from "../definations/File";
import {IDatabaseEntry} from "../definations/helper/DatabaseEntry";

export type FileResponse = IDefaultResponse<IDatabaseEntry<FileWithDownload>>
export type StartUploadFileResponse = IDefaultResponse<IDatabaseEntry<Omit<IUploadFile, "parts"> & { parts: UploadFilePart }>>