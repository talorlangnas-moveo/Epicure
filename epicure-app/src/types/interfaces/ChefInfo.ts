import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";

export interface ChefInfo {
    firstName: string;
    lastName: string;
    cardImg: CardImage;
    description: string;
    chefsRestaurants: CardInfo[]
}
