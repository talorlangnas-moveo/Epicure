import { ChefInfo } from '@/types/interfaces/ChefInfo';
import { CardImage } from '@/types/interfaces/CardImage';
import { YossiShitritCard } from './chefImage';
import { restaurantsCards } from './restaurantsCards';


export const chefInfo: ChefInfo = {
  firstName: "Yossi",
  lastName: "Shitrit",
  cardImg: YossiShitritCard as CardImage,
  description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  chefsRestaurants: restaurantsCards,
};
