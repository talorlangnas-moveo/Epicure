import { CardInfo } from '@components/card/card';

import restaurantsCardsData from '@/data/restaurantsCards';
import dishCardsData from '@/data/dishCards';
import { chefRestaurantsCards } from '@/data/chefInfo';

export async function fetchRestaurantCards(): Promise<CardInfo[]> {
  return restaurantsCardsData as CardInfo[];
}

export async function fetchDishCards(): Promise<CardInfo[]> {
  return dishCardsData as CardInfo[];
}

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}
