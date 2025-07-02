import {Dish} from '@/types/interfaces/dish';
import { DishColumn } from '@/types/columns/dish.column';
import { Flame, Leaf, Salad, Utensils } from "lucide-react"
import { DishCategoryInfo } from '@/types/dishCategoryInfo';

export async function convertDishToCulomn(dish: Dish): Promise<DishColumn> {
  const restaurantName = dish.restaurant
    ? `${dish.restaurant.name}`
    : "No Restaurant Assigned";
  
  return {
      _id: dish._id,
      restaurant: dish?.restaurant,
      name: dish.name,
      description: dish.description,
      imgUrl: dish.imgUrl,
      price: dish.price,
      dishCategory: dish.dishCategory,
      restaurantName: restaurantName,
      imgFile: new File([], ""),
    };
  }

  export function getDishCategoryIcon(category?: string): DishCategoryInfo {
    switch (category) {
      case "spicy":
        return { icon: Flame, className: "text-red-500" }
      case "vegan":
        return { icon: Leaf, className: "text-green-600" }
      case "vegetarian":
        return { icon: Salad, className: "text-lime-600" }
      case "none":
        return { icon: Utensils, className: "text-gray-400" }  
      default:
        return { icon: Utensils, className: "text-gray-400" }
    }
  }