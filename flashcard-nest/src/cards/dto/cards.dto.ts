import { Categories } from "src/categories/categories.entity";

export interface CardDto {
    title: string;
    frontdesc: string;
    backdesc: string;
    isAchieved: boolean;
    isPublic: boolean;
    category: Categories;
}
