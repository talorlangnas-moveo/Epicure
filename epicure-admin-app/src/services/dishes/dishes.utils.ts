import {Dish} from '@/types/interfaces/dish';
import { DishColumn } from '@/types/columns/dish.column';
import { Flame, Leaf, Salad, Utensils } from "lucide-react"
import { DishCategoryInfo } from '@/types/dishCategoryInfo';
import { fetchRestaurantById } from '@services/restaurants/restaurants.api';

export async function getRestaurantName(id: string): Promise<string> {
  const restaurant = await fetchRestaurantById(id);
  if (!restaurant) {
    return "No Restaurant Assigned";
  }
  return restaurant.name;
}

export async function convertDishToCulomn(dish: Dish): Promise<DishColumn> {
  const restaurantName = await getRestaurantName(dish.restaurantId);
  
  return {
      _id: dish._id,
      restaurantId: dish.restaurantId,
      name: dish.name,
      description: dish.description,
      imgUrl: dish.imgUrl,
      price: dish.price,
      dishCategory: dish.dishCategory,
      restaurantName: restaurantName,
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