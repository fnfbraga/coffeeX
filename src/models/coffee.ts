interface CoffeeRelationships {
    originArabica: Exclude<CountryResponse, "@collectionId" | "@collectionName">;
    originRobusta: Exclude<CountryResponse, "@collectionId" | "@collectionName">;
}

export interface CoffeeResponse {
    "@collectionId": string;
    "@collectionName": string;
    id: string;
    created: string;
    updated: string;
    brand: string;
    packSize: string;
    percentRobusta: number;
    percentArabica: number;
    description: string;
    "@expand": CoffeeRelationships
}

export interface CountryResponse {
    "@collectionId": string;
    "@collectionName": string;
    id: string;
    created: string;
    updated: string;
    name_en: string;
    alpha2: string;
    flag: string;
    alpha3: string;
}