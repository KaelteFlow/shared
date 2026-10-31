import {CustomerObject} from "../definations/CustomerObject";
import {IDefaultResponse} from "./helper/DefaultResponse";
import {IDatabaseEntry} from "../definations/helper/DatabaseEntry";
import {ISearchResponse} from "./helper/SearchResponse";
import {ICustomer} from "../definations/Customer";
import {IUser} from "../definations/User";

export interface ICustomerObjectEntities {
    customers: Record<string, ICustomer>;
    users: Record<string, IUser>;
}

export type CustomerObjectsResponse = ISearchResponse<IDatabaseEntry<CustomerObject>, ICustomerObjectEntities>;
export type CustomerObjectResponse = IDefaultResponse<IDatabaseEntry<CustomerObject>, ICustomerObjectEntities>;