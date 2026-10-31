export type IDatabaseEntry<T> = T & {
    _id: string;
    updatedAt: Date;
    createdAt: Date;
}