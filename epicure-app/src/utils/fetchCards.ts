import { CardInfo } from '@/components/card/card';
import { chefRestaurantsCards } from '@/data/chefInfo';

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}
