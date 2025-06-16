import { Stars1Image, Stars2Image, Stars3Image, Stars4Image } from '@/icons';
import { StaticImageData } from 'next/image';

export const ratingToImageMap: { [key: number]: StaticImageData } = {
    1: Stars1Image,
    2: Stars2Image,
    3: Stars3Image,
    4: Stars4Image,
} as const;

export const getRatingImage = (rating: number): StaticImageData => {
    return ratingToImageMap[rating] || Stars1Image; 
}; 