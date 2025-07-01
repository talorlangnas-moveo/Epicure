import { CardInfo } from '@/components/card/card';
import { Chef } from '@/types/interfaces/chef';

export async function convertChefToCard(chef: Chef): Promise<CardInfo> {
  return {
    id: chef._id,
    imgUrl: chef.imgUrl,
  };
}