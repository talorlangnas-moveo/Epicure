import { StaticImageData } from 'next/image';
import { SpicyIconCard, VegitarianIcon, VeganIcon } from '@/icons';
import { DishCategoryType } from '@/types/interfaces/dish';

export const dishCategoryToLogoMap: { [key: string]: StaticImageData } = {
    "spicy": SpicyIconCard,
    "vegetarian": VegitarianIcon,
    "vegan": VeganIcon,
} as const;

export const getDishCategoryLogo = (dishCategory: DishCategoryType): StaticImageData => {
    return dishCategoryToLogoMap[dishCategory] || SpicyIconCard; 
}; 