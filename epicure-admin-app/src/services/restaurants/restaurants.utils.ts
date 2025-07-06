import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { Restaurant } from "@/types/interfaces/restaurant";

export async function convertRestaurantToColumn(restaurant: Restaurant): Promise<RestaurantColumn> {
  const chefName = restaurant.chef
    ? `${restaurant.chef.firstName} ${restaurant.chef.lastName}`
    : "No Chef Assigned";
  
  return {
    _id: restaurant._id,
    chef: restaurant.chef,
    name: restaurant.name,
    // chefName: chefName,
    chefName: chefName,
    imgUrl: restaurant.imgUrl,
    imgFile: new File([], ""),
    rating: restaurant.rating,
    openingTime: restaurant.openingTime,
    closingTime: restaurant.closingTime,
    foundedDate: restaurant.foundedDate,
  };
}




