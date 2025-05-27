import { StaticImageData } from "next/image";

export interface CardInfo {
    id: string;
    type: string;
    title: string;
    description: string;
    imgUrl: StaticImageData;
    rating?: number;
    price?: number;
    logoUrl?: StaticImageData;
}
