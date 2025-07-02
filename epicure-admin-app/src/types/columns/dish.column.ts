import { Dish } from "@/types/interfaces/dish";

export type DishColumn = Dish & {
    restaurantName?: string;
}