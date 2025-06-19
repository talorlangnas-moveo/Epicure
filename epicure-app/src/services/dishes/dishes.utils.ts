import {Dish} from '@interfaces/dish';
import { CardInfo } from '@/components/card/card';
import { CardType } from '@/types/cardType';
import { getDishImage } from './image.utils';
import { getDishCategoryLogo } from '@/utils/dishCategoryLogo.utils';

export function convertDishToCard(dish: Dish): CardInfo {
    return {
      id: dish._id,
      type: 'dish' as CardType,
      title: dish.name,
      description: dish.description,
      imgUrl: getDishImage(dish.imgUrl),
      price: dish.price,
      dishCategoryLogo: dish.dishCategory ? getDishCategoryLogo(dish.dishCategory) : undefined,
    };
  }

  export async function getDishesAsCards(dishes: Dish[]): Promise<CardInfo[]> {
    return Promise.all(dishes.map(convertDishToCard));
  }