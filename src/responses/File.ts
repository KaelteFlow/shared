import {IDefaultResponse} from "./helper/DefaultResponse";
import {FileWithDownload, IUploadFile, UploadFilePart} from "../definations/File";
import {IDatabaseEntry} from "../definations/helper/DatabaseEntry";

export type CreateFileUploadResponseDto = IDefaultResponse<IDatabaseEntry<Omit<IUploadFile, "parts"> & { parts: UploadFilePart }>>
export type FileResponse = IDefaultResponse<IDatabaseEntry<FileWithDownload>>
