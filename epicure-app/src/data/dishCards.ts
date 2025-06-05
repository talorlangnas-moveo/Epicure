import { CardInfo } from '@/components/card/card';
import PadKiMaonImage from '@public/dishes/padKiMao.png';
import GarberImage from '@public/dishes/garber.png';
import Dish3Image from '@public/dishes/dish3.png';
import { SpicyIconCard, VeganIcon } from "@icons";

export const dishCards: CardInfo[] = [
  {
    id: '1',
    type: 'dish',
    title: 'Pad Ki Mao',
    description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut" ,
    imgUrl: PadKiMaonImage,
    price: 88,
    dishCategoryLogo: SpicyIconCard, 
  },
  {
    id: '2',
    type: 'dish',
    title: 'Garbanzo Frito',
    description: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    imgUrl: GarberImage,
    price: 78,
    dishCategoryLogo: SpicyIconCard, 
  },
  {
    id: '3',
    type: 'dish',
    title: 'Smoked Pizza',
    description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
    imgUrl: Dish3Image,
    price: 65,
    dishCategoryLogo: VeganIcon, 
  },
];

export default dishCards;