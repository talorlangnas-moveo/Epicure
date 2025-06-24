export interface Restaurant {
  _id: string;
  chefId: string;
  name: string;
  imgUrl: string;
  rating: number;
  ratingImage?: string;
  openingTime: string;
  closingTime: string;
  foundedDate: Date;
  route?: string;
  createdAt?: Date;
} 