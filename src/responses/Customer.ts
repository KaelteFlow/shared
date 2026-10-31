import {ICustomer} from "../definations/Customer";
import {IDefaultResponse} from "./helper/DefaultResponse";
import {IDatabaseEntry} from "../definations/helper/DatabaseEntry";
import {ISearchResponse} from "./helper/SearchResponse";
import {IUser} from "../definations/User";

export interface ICustomerEntities {
    users: Record<string, IUser>;
}

export type CustomersResponse = ISearchResponse<IDatabaseEntry<ICustomer>, ICustomerEntities>;
export type CustomerResponse = IDefaultResponse<IDatabaseEntry<ICustomer>, ICustomerEntities>;
