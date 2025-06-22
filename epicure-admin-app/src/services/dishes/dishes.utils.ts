import {Dish} from '@/types/interfaces/dish';
import { DishColumn } from '@/types/columns/dishes.column';
import { Flame, Leaf, Salad, Utensils } from "lucide-react"
import { DishCategoryInfo } from '@/types/dishCategoryInfo';
import { CardInfo } from '@/components/card/card';
import { CardType } from '@/types/cardType';
import { getDishImage } from './image.utils';
import { getDishCategoryLogo } from '@/utils/dishCategoryLogo.utils';

export function convertDishToCulomn(dish: Dish): CardInfo {
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


  
  export function getDishCategoryIcon(category?: string): DishCategoryInfo {
    switch (category) {
      case "spicy":
        return { icon: Flame, className: "text-red-500" }
      case "vegan":
        return { icon: Leaf, className: "text-green-600" }
      case "vegetarian":
        return { icon: Salad, className: "text-lime-600" }
      default:
        return { icon: Utensils, className: "text-gray-400" }
    }
  }