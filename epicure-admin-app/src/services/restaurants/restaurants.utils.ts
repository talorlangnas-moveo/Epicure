import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { Restaurant } from "@/types/interfaces/restaurant";
import { fetchChefById } from "@services/chefs/chefs.api";

export async function getChefsNameById(id: string): Promise<string> {
  const chef = await fetchChefById(id);
  return `${chef.firstName} ${chef.lastName}`;
}

export async function convertRestaurantToColumn(restaurant: Restaurant): Promise<RestaurantColumn> {
  const chefName = await getChefsNameById(restaurant.chefId);
  
  return {
    id: restaurant._id,
    name: restaurant.name,
    chefName: chefName,
    image: restaurant.imgUrl,
    rating: restaurant.rating,
    openingTime: restaurant.openingTime,
    closingTime: restaurant.closingTime,
    foundedDate: restaurant.foundedDate,
  };
}


