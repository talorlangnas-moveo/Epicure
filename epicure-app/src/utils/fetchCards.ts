import { CardInfo } from '@/components/card/card';
// import dishCardsData from '@/data/dishCards';

import { chefRestaurantsCards } from '@/data/chefInfo';
// import { restaurants } from '@/data/restaurantData';
// import { dishData } from '@/data/dishData';
import { chefs } from '@/data/chefsData';
import { Chef } from '@interfaces/chef';

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}

export async function fetchChefs(): Promise<Chef[]> {
  return chefs;
}

export function convertChefToCard(chef: Chef): CardInfo {
  return {
    id: chef.id,
    imgUrl: chef.imgUrl,
  };
}

export async function fetchChefById(id: string): Promise<Chef | undefined> {
  return chefs.find(chef => chef.id === id);
}
