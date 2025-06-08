import { CardInfo } from '@/components/card/card';
import { Restaurant } from '@/types/interfaces/restaurant';
import { CardType } from '@/types/cardType';

import dishCardsData from '@/data/dishCards';
import { chefRestaurantsCards } from '@/data/chefInfo';
import { restaurants } from '@/data/restaurantData';

export function convertRestaurantToCard(restaurant: Restaurant): CardInfo {
  return {
    id: restaurant.id,
    type: 'restaurant' as CardType,
    title: restaurant.title,
    slug: restaurant.slug,
    description: restaurant.description,
    imgUrl: restaurant.imgUrl,
    rating: restaurant.rating,
    ratingImage: restaurant.ratingImage,
  };
}


export async function fetchDishCards(): Promise<CardInfo[]> {
  return dishCardsData as CardInfo[];
}

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  return restaurants;
}

export async function fetchRestaurantsAsCards(): Promise<CardInfo[]> {
  const restaurants = await fetchRestaurants();
  return restaurants.map(convertRestaurantToCard);
}
