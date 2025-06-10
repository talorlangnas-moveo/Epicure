import { StaticImageData } from "next/image";
import { CardInfo } from "@components/card/card";

export interface ChefInfo {
    firstName: string;
    lastName: string;
    imgUrl: StaticImageData;
    description: string;
    chefsRestaurants: CardInfo[]
}
