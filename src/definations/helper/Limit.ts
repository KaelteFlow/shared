export type Limit = number | "unlimited";

export const LimitValidator = (field: string) =>
    (value: any): boolean =>
        typeof value[field] === 'number' || value[field] === 'unlimited';