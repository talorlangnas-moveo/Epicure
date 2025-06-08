import { StaticImageData } from 'next/image';

export type MenuType = 'breakfast' | 'lunch' | 'dinner';

export interface Dish {
    id: string;
    type: string;
    title: string;
    description: string;
    imgUrl: StaticImageData;
    price: number;
    dishCategoryLogo: StaticImageData;
    menuType: MenuType;
  } 