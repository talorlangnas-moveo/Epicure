export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  rating: number;
  ratingImage?: string;
  openingTime: string;
  closingTime: string;
  foundedDate: Date;
  route?: string;
  createdAt?: Date;
} 