import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { Restaurant } from "@/types/interfaces/restaurant";
import { fetchChefById } from "@services/chefs/chefs.api";

export async function getChefsNameById(id: string): Promise<string> {
  const chef = await fetchChefById(id);
  if (!chef) {
    return "No Chef Assigned";
  }
  return `${chef.firstName} ${chef.lastName}`;
}

export async function convertRestaurantToColumn(restaurant: Restaurant): Promise<RestaurantColumn> {
  const chefName = await getChefsNameById(restaurant.chefId);
  
  return {
    _id: restaurant._id,
    chefId: restaurant.chefId,
    name: restaurant.name,
    chefName: chefName,
    imgUrl: restaurant.imgUrl,
    rating: restaurant.rating,
    openingTime: restaurant.openingTime,
    closingTime: restaurant.closingTime,
    foundedDate: restaurant.foundedDate,
  };
}


