import { StaticImageData } from "next/image";

export interface CardInfo {
    id: string;
    title: string;
    description: string;
    imgUrl: StaticImageData;
    rating?: number;
    price?: number;
    logoUrl?: StaticImageData;
}
