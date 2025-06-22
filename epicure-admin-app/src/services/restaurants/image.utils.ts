import { StaticImageData } from 'next/image';
import ClaroImage from '@public/restaurantsDesk/claro.png';
import KabKemImage from '@public/restaurantsDesk/kabkem.png';
import MessaImage from '@public/restaurantsDesk/messa.png';
import NitanThaiImage from '@public/restaurantsDesk/nitan_thai.png';
import TigerLillyImage from '@public/restaurantsDesk/tiger_lilly.png';
import YaPanImage from '@public/restaurantsDesk/yapan.png';
import Claro2Image from '@public/restaurantsDesk/claro2.png';
import KabKem2Image from '@public/restaurantsDesk/kabkem2.png';
import Messa2Image from '@public/restaurantsDesk/messa2.png';

export const restaurantImagesMap: { [key: string]: StaticImageData } = {
    "/restaurantsDesk/claro.png": ClaroImage,
    "/restaurantsDesk/kabkem.png": KabKemImage,
    "/restaurantsDesk/messa.png": MessaImage,
    "/restaurantsDesk/nitan_thai.png": NitanThaiImage,
    "/restaurantsDesk/tiger_lilly.png": TigerLillyImage,
    "/restaurantsDesk/yapan.png": YaPanImage,
    "/restaurantsDesk/claro2.png": Claro2Image,
    "/restaurantsDesk/kabkem2.png": KabKem2Image,
    "/restaurantsDesk/messa2.png": Messa2Image,
}

export const getRestaurantImage = (imgUrl: string): StaticImageData => {
    return restaurantImagesMap[imgUrl] || ClaroImage;
}


    
