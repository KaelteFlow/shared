import {IDefaultResponse} from "./DefaultResponse";

export interface ISearchResponse<D, E extends Record<string, any> = {}> extends IDefaultResponse<D[], E> {
    statistics: ISearchStatisticsDto;
}

export interface ISearchStatisticsDto {
    total: number;
    pages: number;
}