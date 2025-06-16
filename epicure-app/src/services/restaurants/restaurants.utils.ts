import { CardInfo } from "@/components/card/card";
import { CardType } from "@/types/cardType";
import { Restaurant } from "@/types/interfaces/restaurant";
import { getRestaurantImage } from "@/services/restaurants/image.utils";
import { getRatingImage } from "@/utils/rating.utils";

export function convertRestaurantToCard(restaurant: Restaurant): CardInfo {
  return {
    id: restaurant._id,
    type: 'restaurant' as CardType,
    title: restaurant.name,
    description: restaurant.description,
    imgUrl: getRestaurantImage(restaurant.imgUrl),
    rating: restaurant.rating,
    ratingImage: getRatingImage(restaurant.rating),
    route: `/restaurants/${restaurant._id}`,
  };
}

  export async function getRestaurantsAsCards(restaurants: Restaurant[]): Promise<CardInfo[]> {
    return Promise.all(restaurants.map(convertRestaurantToCard));
  }