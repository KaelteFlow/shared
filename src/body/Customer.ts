import {ICustomer} from "../definations/Customer";

export type CreateCustomerBody = Omit<ICustomer, "ssoIdP" | "statistics" | "limits"> & {
    ignoreDoubles?: boolean;
}

export type UpdateCustomerBody = Partial<Omit<ICustomer, "ignoreDoubles">>;