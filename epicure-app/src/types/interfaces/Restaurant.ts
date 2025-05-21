import { StaticImageData } from "next/image";

export interface Restaurant {
    name: string;
    chef: string;
    imgUrl?: StaticImageData;
}

