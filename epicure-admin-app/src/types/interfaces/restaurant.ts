export interface Restaurant {
    _id: string;
    chefId: string;
    name: string;
    description: string;
    imgUrl: string;
    rating: string;
    ratingImage?: string;
    openingTime: string;
    closingTime: string;
    foundedDate: Date;
    route?: string;
    createdAt?: Date;
  } 