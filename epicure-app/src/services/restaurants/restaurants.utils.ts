import { CardInfo } from "@/components/card/card";
import { CardType } from "@/types/cardType";
import { Restaurant } from "@/types/interfaces/restaurant";
import { getRestaurantImage } from "@/services/restaurants/image.utils";
import { getRatingImage } from "@/utils/rating.utils";
import { fetchChefById } from "@services/chefs/chefs.api";

export async function getChefsNameById(id: string): Promise<string> {
  const chef = await fetchChefById(id);
  if (!chef) {
    return "No Chef Assigned";
  }
  return `${chef.firstName} ${chef.lastName}`;
}

export async function convertRestaurantToCard(restaurant: Restaurant): Promise<CardInfo> {
  const chefName = restaurant.chefId ? await getChefsNameById(restaurant.chefId) : "No Chef Assigned";
  
  return {
    id: restaurant._id,
    type: 'restaurant' as CardType,
    title: restaurant.name,
    description: chefName,
    imgUrl: getRestaurantImage(restaurant.imgUrl),
    rating: restaurant.rating,
    ratingImage: getRatingImage(restaurant.rating),
    route: `/restaurants/${restaurant._id}`,
    slug: restaurant.name.toLowerCase().replace(/ /g, '-'),
  };
}

  export async function getRestaurantsAsCards(restaurants: Restaurant[]): Promise<CardInfo[]> {
    return Promise.all(restaurants.map(convertRestaurantToCard));
  }