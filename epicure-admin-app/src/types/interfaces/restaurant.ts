import { identifiers } from "@/utils/utilsFunctions";

export interface Restaurant extends identifiers {
    chefId: string;
    imgUrl: string;
    rating: string;
    ratingImage?: string;
    openingTime: string;
    closingTime: string;
    foundedDate: Date;
    route?: string;
    createdAt?: Date;
  } 