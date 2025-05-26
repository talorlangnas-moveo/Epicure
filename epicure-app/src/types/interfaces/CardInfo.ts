import { StaticImageData } from "next/image";

export interface CardInfo {
    title: string;
    description: string;
    imgUrl: StaticImageData;
    rating?: number;
    price?: number;
    logoUrl?: StaticImageData;
}
