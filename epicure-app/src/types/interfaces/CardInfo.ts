import { StaticImageData } from "next/image";
import { CardType } from "../cardType";

export interface CardInfo {
    id: string;
    type: CardType;
    title: string;
    description: string;
    imgUrl: StaticImageData;
    rating?: number;
    ratingImage?: StaticImageData;
    price?: number;
    logoUrl?: StaticImageData;
}
