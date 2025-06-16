import { StaticImageData } from 'next/image';
import { SpicyIconCard, VegitarianIcon, VeganIcon } from '@/icons';

export const dishCategoryToLogoMap: { [key: string]: StaticImageData } = {
    "spicy": SpicyIconCard,
    "vegetarian": VegitarianIcon,
    "vegan": VeganIcon,
} as const;

export const getDishCategoryLogo = (dishCategory: string): StaticImageData => {
    return dishCategoryToLogoMap[dishCategory] || SpicyIconCard; 
}; 