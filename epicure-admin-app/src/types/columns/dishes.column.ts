import { Dish } from "@/types/interfaces/dish";

export type DishColumn = Dish & {
    chefName?: string;
    restaurantName?: string;
}