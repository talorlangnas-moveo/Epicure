import { Dish } from "@/types/interfaces/dishes";

export type DishColumn = Dish & {
    chefName?: string;
    restaurantName?: string;
}