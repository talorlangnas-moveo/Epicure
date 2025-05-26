import { StaticImageData } from "next/image";
import { FooterInfo } from "./FooterInfo";

export interface CardImage {
    title: string;
    description: string;
    imgUrl: StaticImageData;
    height?: number | string;
    width?: number | string;
    cardClassName?: string; // defines the class for image wrapper container
    imageClassName?: string; // defines if the image is background or responsive
    children?: React.ReactNode;
    footer?: FooterInfo; 
}