import { CardInfo } from '@components/card/card';
import { Restaurant } from '@/types/interfaces/Restaurant';
import { CardType } from '@/types/cardType';
import { StaticImageData } from 'next/image';

import restaurantsCardsData from '@/data/restaurantsCards';
import dishCardsData from '@/data/dishCards';
import { chefRestaurantsCards } from '@/data/chefInfo';
import restaurantsData from '@/data/restaurants.json';

export function convertRestaurantToCard(restaurant: Restaurant): CardInfo {
  return {
    id: restaurant.id,
    type: 'restaurant' as CardType,
    title: restaurant.title,
    description: restaurant.description,
    imgUrl: restaurant.imgUrl as unknown as StaticImageData,
    rating: restaurant.rating,
    ratingImage: restaurant.ratingImage as unknown as StaticImageData
  };
}

export async function fetchRestaurantCards(): Promise<CardInfo[]> {
  return restaurantsCardsData as CardInfo[];
}

export async function fetchDishCards(): Promise<CardInfo[]> {
  return dishCardsData as CardInfo[];
}

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  return restaurantsData as Restaurant[];
}

export async function fetchRestaurantsAsCards(): Promise<CardInfo[]> {
  const restaurants = await fetchRestaurants();
  return restaurants.map(convertRestaurantToCard);
}
