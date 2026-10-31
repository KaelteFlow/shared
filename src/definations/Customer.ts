import {IGeoLocation} from "./helper/GeoLocation";
import {IUserContact} from "./UserContact";
import {EntryStatus} from "./helper/EntryStatus";
import {Limit} from "./helper/Limit";

export type CustomerType = 'individual' | 'company';
export const CustomerTypes: CustomerType[] = ['individual', 'company'];

export interface ICustomer {
    type: CustomerType;
    status: EntryStatus;

    name: string;
    firstName?: string;

    location: IGeoLocation;
    contacts: IUserContact[];

    website?: string;
    email?: string;
    phone?: string;
    mobile?: string;

    ssoIdP?: ISsoIdP;

    limits: ICustomerLimits;
    statistics: ICustomerStatistics;
}

export interface ISsoIdP {
    server: string;
    domains: string[];
    clientId: string;
    clientSecret?: string;
    additional_scopes: string[];
}

export interface ICustomerLimits {
    accounts: Limit;
    objects: Limit;
    systems: Limit;
    disk: Limit;
}

export interface ICustomerStatistics {
    accounts: number;
    objects: number;
    systems: number;
    documents: number;
}