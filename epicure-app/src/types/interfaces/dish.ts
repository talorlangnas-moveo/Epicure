import { Restaurant } from "./restaurant";

export type DishCategoryType = 'spicy' | 'vegetarian' | 'vegan';

export interface Dish {
    _id: string;
    restaurant?: Restaurant;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
    dishCategory?: DishCategoryType;
}