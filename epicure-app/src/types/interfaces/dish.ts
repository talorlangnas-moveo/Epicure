import { StaticImageData } from 'next/image';

export interface Dish {
    id: string;
    restaurantId: string;
    title: string;
    description: string;
    imgUrl: StaticImageData;
    price: number;
    dishCategoryLogo?: StaticImageData;
}