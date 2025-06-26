import { StaticImageData } from 'next/image';
import PadKiMaoImage from '@public/dishPage/padkimao.png';
import TaMaLaKoImage from '@public/dishPage/ta_ma_la_ko.png';
import RedFarmImage from '@public/dishPage/redFarm.png';
import PadKiMaonImage2 from '@public/dishes/padKiMao.png';
import GarberImage from '@public/dishes/garber.png';
import Dish3Image from '@public/dishes/dish3.png';
import dishPlaceholderImage from '@public/dishPlaceholder.png';

export const dishImagesMap: { [key: string]: StaticImageData } = {
    "/dishPage/padkimao.png": PadKiMaoImage,
    "/dishPage/ta_ma_la_ko.png": TaMaLaKoImage,
    "/dishPage/redFarm.png": RedFarmImage,
    "/dishes/padKiMao.png": PadKiMaonImage2,
    "/dishes/garber.png": GarberImage,
    "/dishes/dish3.png": Dish3Image,
}

export const getDishImage = (imgUrl: string): StaticImageData => {
    return dishImagesMap[imgUrl] || dishPlaceholderImage;
}