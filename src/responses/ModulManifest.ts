import {IDefaultResponse} from "./helper/DefaultResponse";
import {IModulManifest, IModulManifestWithDownload} from "../definations/ModulManifest";
import {ISearchResponse} from "./helper/SearchResponse";

export type ModulManifestsResponse = ISearchResponse<IModulManifest>;
export type ModulManifestResponse = IDefaultResponse<IModulManifest>;
export type ModulManifestsWithDownloadResponse = ISearchResponse<IModulManifestWithDownload>;
export type ModulManifestWithDownloadResponse = IDefaultResponse<IModulManifestWithDownload>;