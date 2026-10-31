import {Limit} from "./helper/Limit";
import {ICustomer} from "./Customer";

export type CustomerObject = Omit<ICustomer, "limits" | "statistics"> & {
    customer: string;
    limits: ICustomerObjectLimits;
}

export interface ICustomerObjectLimits {
    accounts: Limit;
    systems: Limit;
}