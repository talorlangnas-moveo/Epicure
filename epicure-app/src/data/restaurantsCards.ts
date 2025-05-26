import {CardInfo} from '@interfaces/CardInfo';
import ClaroImage from '@public/restaurants/claro.png';
import LuminaImage from '@public/restaurants/lumina.png';
import KabKemImage from '@public/restaurants/KabKem.png';
import MessaImage from '@public/restaurants/messa.png';
import YapanImage from "@public/restaurants/yapan.png";

export const restaurantsCards: CardInfo[] = [
  {
    id: '1',
    title: 'Claro',
    description: 'Ran Shmueli',
    imgUrl: ClaroImage,
    rating: 4,
  },
  {
    id: '2',
    title: 'Lumina',
    description: 'Meir Adoni',
    imgUrl: LuminaImage,
    rating: 3,
  },
  {
    id: '3',
    title: 'KabKem',
    description: 'Kfir Ben Shabat',
    imgUrl: KabKemImage,
    rating: 4.5,
  },
  {
    id: '4',
    title: 'Messa',
    description: 'Aviv Moshe',
    imgUrl: MessaImage,
    rating: 3.5,
  },
  {
    id: '5',
    title: 'Yapan',
    description: 'Omer Miller',
    imgUrl: YapanImage,
    rating: 4.9,
  },
];