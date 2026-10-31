export interface IDefaultResponse<D, E extends Record<string, any> = {}> {
    data: D;
    entities: E;
}