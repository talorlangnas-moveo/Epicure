import { CardInfo } from '@/components/card/card';
import { Chef } from '@/types/interfaces/chef';
import { getChefImage } from './image.utils';

export async function convertChefToCard(chef: Chef): Promise<CardInfo> {
  const chefImage = getChefImage(chef.imgUrl);
  return {
    id: chef._id,
    imgUrl: chefImage,
  };
}