import { StaticImageData } from "next/image";
import { FooterInfo } from "./FooterInfo";

export interface CardImage {
    title: string;
    description: string;
    imgUrl: StaticImageData;
    height?: number | string;
    width?: number | string;
    cardClassName?: string; 
    imageClassName?: string; 
    children?: React.ReactNode;
    footer?: FooterInfo; 
}