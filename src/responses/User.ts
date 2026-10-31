import {IDefaultResponse} from "./helper/DefaultResponse";
import {IDatabaseEntry} from "../definations/helper/DatabaseEntry";
import {IUser} from "../definations/User";
import {ISearchResponse} from "./helper/SearchResponse";

export type UsersResponse = ISearchResponse<IDatabaseEntry<IUser>>;
export type UserResponse = IDefaultResponse<IDatabaseEntry<IUser>>;