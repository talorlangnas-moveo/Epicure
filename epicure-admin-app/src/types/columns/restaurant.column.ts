import { Restaurant } from "@/types/interfaces/restaurant";

export type RestaurantColumn = Restaurant & {
    chefName: string;
    imgFile: File;
}