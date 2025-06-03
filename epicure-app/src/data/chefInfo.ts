import { ChefInfo } from '@/types/interfaces/chefInfo';
import { CardInfo } from '@/types/interfaces/cardInfo';
import YossiShitritImage from "@public/chefs/Yossi_Shitrit.png";
import Mashya from '@public/restaurants/mashya.png';
import Onza from '@public/restaurants/onza.png';
// import KitchenMarket from '@public/restaurants/kitchenMarket.png';
import KitchenMarket from '@public/restaurants/kitchenMarketYossi.png';



export const chefRestaurantsCards: CardInfo[] = [
  {
    id: '1',
    type: 'chef',
    title: 'Onza',
    description: 'Yossi Shitrit',
    imgUrl: Onza,
    rating: 4,
  },
  {
    id: '2',
    type: 'chef',
    title: 'Kitchen Market',
    description: 'Yossi Shitrit',
    imgUrl: KitchenMarket,
    rating: 3,
  },
  {
    id: '3',
    type: 'chef',
    title: 'Mashya',
    description: 'Yossi Shitrit',
    imgUrl: Mashya,
    rating: 4.5,
  },
  // {
  //   id: '4',
  //   type: 'restaurant',
  //   title: 'Messa',
  //   description: 'Aviv Moshe',
  //   imgUrl: MessaImage,
  //   rating: 3.5,
  // },
  // {
  //   id: '5',
  //   type: 'restaurant',
  //   title: 'Yapan',
  //   description: 'Omer Miller',
  //   imgUrl: YapanImage,
  //   rating: 4.9,
  // },
];

export const chefInfo: ChefInfo = {
  firstName: "Yossi",
  lastName: "Shitrit",
  imgUrl: YossiShitritImage,
  description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  chefsRestaurants: chefRestaurantsCards,
};
