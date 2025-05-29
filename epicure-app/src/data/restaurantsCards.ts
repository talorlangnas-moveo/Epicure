import {CardInfo} from '@/types/interfaces/cardInfo';
import ClaroImage from '@public/restaurants/claro.png';
import LuminaImage from '@public/restaurants/lumina.png';
import KabKemImage from '@public/restaurants/KabKem.png';
// import MessaImage from '@public/restaurants/messa.png';
// import YapanImage from "@public/restaurants/yapan.png";

export const restaurantsCards: CardInfo[] = [
  {
    id: '1',
    type: 'restaurant',
    title: 'Claro',
    description: 'Ran Shmueli',
    imgUrl: ClaroImage,
    rating: 4,
  },
  {
    id: '2',
    type: 'restaurant',
    title: 'Lumina',
    description: 'Meir Adoni',
    imgUrl: LuminaImage,
    rating: 3,
  },
  {
    id: '3',
    type: 'restaurant',
    title: 'KabKem',
    description: 'Kfir Ben Shabat',
    imgUrl: KabKemImage,
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