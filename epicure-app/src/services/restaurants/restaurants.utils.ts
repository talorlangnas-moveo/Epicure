import { CardInfo } from "@/components/card/card";
import { CardType } from "@/types/cardType";
import { Restaurant } from "@/types/interfaces/restaurant";
import { getRatingImage } from "@/utils/rating.utils";

export async function convertRestaurantToCard(restaurant: Restaurant): Promise<CardInfo> {
  const chefName = restaurant.chef
    ? `${restaurant.chef.firstName} ${restaurant.chef.lastName}`
    : "No Chef Assigned";

  return {
    id: restaurant._id,
    type: 'restaurant' as CardType,
    title: restaurant.name,
    description: chefName,
    imgUrl: restaurant.imgUrl,
    rating: restaurant.rating,
    ratingImage: getRatingImage(restaurant.rating),
    route: `/restaurants/${restaurant._id}`,
    slug: restaurant.name.toLowerCase().replace(/ /g, '-'),
  };
}

export async function getRestaurantsAsCards(restaurants: Restaurant[]): Promise<CardInfo[]> {
  return Promise.all(restaurants.map(convertRestaurantToCard));
}