export type Scopes = Scope | IFineGradedScope;
export type RequiredScopes = Scopes | Array<Scopes>;

export enum Scope {
    ADMINISTRATOR = "ADMINISTRATOR", // Super Administrator
    POST_ACCOUNTS = "POST_ACCOUNTS", GET_ACCOUNTS = "GET_ACCOUNTS", PUT_ACCOUNTS = "PUT_ACCOUNTS", DELETE_ACCOUNTS = "DELETE_ACCOUNTS",
    POST_CUSTOMERS = "POST_CUSTOMERS", GET_CUSTOMERS = "GET_CUSTOMERS", PUT_CUSTOMERS = "PUT_CUSTOMERS", DELETE_CUSTOMERS = "DELETE_CUSTOMERS",
    POST_OBJECTS = "POST_OBJECTS", GET_OBJECTS = "GET_OBJECTS", PUT_OBJECTS = "PUT_OBJECTS", DELETE_OBJECTS = "DELETE_OBJECTS",
    POST_SYSTEMS = "POST_SYSTEMS", GET_SYSTEMS = "GET_SYSTEMS", PUT_SYSTEMS = "PUT_SYSTEMS", DELETE_SYSTEMS = "DELETE_SYSTEMS",
    POST_UNITS = "POST_UNITS", PUT_UNITS = "PUT_UNITS", DELETE_UNITS = "DELETE_UNITS",

    POST_TOOLS = "POST_TOOLS", PUT_TOOLS = "PUT_TOOLS", DELETE_TOOLS = "DELETE_TOOLS",

    POST_FILES = "POST_FILES", PUT_FILES = "PUT_FILES", DELETE_FILES = "DELETE_FILES"
}

export const Scopes: Scope[] = [Scope.ADMINISTRATOR];

export type ScopeFlags = "user" | "customer" | "object" | "system";

export interface IFineGradedScopeContext {
    user?: string;
    customer?: string;
    object?: string;
    system?: string;
}

export type FineGradedSdasdasdcopeContext = Record<ScopeFlags, string>;
export interface IFineGradedScope {
    scope: Scope;
    context: IFineGradedScopeContext;
}