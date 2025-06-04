import { StaticImageData } from "next/image";
import { CardInfo } from "./cardInfo";

export interface ChefInfo {
    firstName: string;
    lastName: string;
    imgUrl: StaticImageData;
    description: string;
    chefsRestaurants: CardInfo[]
}
