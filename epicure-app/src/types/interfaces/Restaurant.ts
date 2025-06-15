import { StaticImageData } from 'next/image';

export interface Restaurant {
  id: string;
  type: string;
  title: string;
  description: string;
  imgUrl: StaticImageData;
  rating: number;
  ratingImage: StaticImageData;
  openingTime: string;
  closingTime: string;
  foundedDate: string;
  route: string;
} 