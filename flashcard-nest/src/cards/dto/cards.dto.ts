import { Categories } from "src/categories/categories.entity";
import { User } from "src/users/users.entity";

export interface CardDto {
    title: string;
    frontdesc: string;
    backdesc: string;
    isAchieved: boolean;
    isPublic: boolean;
    category: Categories;
    user: User;
}
