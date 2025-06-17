import { CardInfo } from '@/components/card/card';
import { Chef } from '@/types/interfaces/chef';
import { getChefImage } from './image.utils';

export function convertChefToCard(chef: Chef): CardInfo {
  return {
    id: chef._id,
    imgUrl: getChefImage(chef.imgUrl),
  };
}