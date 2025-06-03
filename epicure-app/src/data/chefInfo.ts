import { ChefInfo } from '@/types/interfaces/chefInfo';
import { CardInfo } from '@components/card/card';
import YossiShitritImage from "@public/chefs/Yossi_Shitrit.png";
import Mashya from '@public/restaurants/mashya.png';
import Onza from '@public/restaurants/onza.png';
import KitchenMarket from '@public/restaurants/kitchenMarketYossi.png';

export const chefRestaurantsCards: CardInfo[] = [
  {
    id: '1',
    type: 'chef',
    title: 'Onza',
    imgUrl: Onza,
  },
  {
    id: '2',
    type: 'chef',
    title: 'Kitchen Market',
    imgUrl: KitchenMarket,
  },
  {
    id: '3',
    type: 'chef',
    title: 'Mashya',
    imgUrl: Mashya,
  },
];

export const chefInfo: ChefInfo = {
  firstName: "Yossi",
  lastName: "Shitrit",
  imgUrl: YossiShitritImage,
  description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  chefsRestaurants: chefRestaurantsCards,
};
