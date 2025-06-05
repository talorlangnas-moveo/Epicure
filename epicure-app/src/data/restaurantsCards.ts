import { CardInfo } from '@/components/card/card';
import ClaroImage from '@public/restaurants/claro.png';
import LuminaImage from '@public/restaurants/lumina.png';
import KabKemImage from '@public/restaurants/KabKem.png';
import { Stars4Image, Stars3Image } from '@icons';

export const restaurantsCards: CardInfo[] = [
  {
    id: '1',
    type: 'restaurant',
    title: 'Claro',
    description: 'Ran Shmueli',
    imgUrl: ClaroImage,
    rating: 4,
    ratingImage: Stars4Image,
  },
  {
    id: '2',
    type: 'restaurant',
    title: 'Lumina',
    description: 'Meir Adoni',
    imgUrl: LuminaImage,
    rating: 3,
    ratingImage: Stars3Image,
  },
  {
    id: '3',
    type: 'restaurant',
    title: 'KabKem',
    description: 'Kfir Ben Shabat',
    imgUrl: KabKemImage,
    rating: 4,
    ratingImage: Stars4Image,
  },
];

export default restaurantsCards;