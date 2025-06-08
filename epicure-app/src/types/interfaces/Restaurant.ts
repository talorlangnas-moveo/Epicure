import { StaticImageData } from 'next/image';
import { CardInfo } from '@components/card/card';

export interface Restaurant {
  id: string;
  type: string;
  title: string;
  slug: string;
  description: string;
  imgUrl: StaticImageData;
  homePageImgUrlMobile?: StaticImageData;
  homePageImgUrlDesktop?: StaticImageData;
  rating: number;
  ratingImage: StaticImageData;
  openingTime: string;
  closingTime: string;
  foundedDate: string;
  dishes?: CardInfo[];
} 