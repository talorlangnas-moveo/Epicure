import { CardInfo } from '@components/card/card';

export async function fetchRestaurantCards(): Promise<CardInfo[]> {
  const dataModule = await import('@/data/restaurantsCards');

  return dataModule.default as CardInfo[];
}

export async function fetchDishCards(): Promise<CardInfo[]> {
  const dataModule = await import('@/data/dishCards');

  return dataModule.default as CardInfo[];
}

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  const dataModule = await import('@/data/chefInfo');

  return dataModule.chefRestaurantsCards as CardInfo[];
}
