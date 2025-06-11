import { StaticImageData } from "next/image";

export interface Chef {
    id: string;
    firstName: string;
    lastName: string;
    imgUrl: StaticImageData;
    foundedDate: string;
    numberOfViews: number;
}