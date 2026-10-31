import {CustomerObject} from "../definations/CustomerObject";

export type CreateCustomerObject = Omit<CustomerObject, "statistics" | "limits"> & {
    ignoreDoubles?: boolean;
};

export type UpdateCustomerObject = Partial<Omit<CreateCustomerObject, "ignoreDoubles">>;
