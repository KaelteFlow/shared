export interface IGeoLocation {
    street: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    longitude?: number;
    latitude?: number;
}