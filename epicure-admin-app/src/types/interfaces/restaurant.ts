import { identifiers } from "@/utils/utilsFunctions";

export interface Restaurant extends identifiers {
    // _id: string;
    // name: string;
    chefId: string;
    imgUrl?: string;
    imgMimeType?: string;
    rating: string;
    ratingImage?: string;
    openingTime: string;
    closingTime: string;
    foundedDate: Date;
    route?: string;
    createdAt?: Date;
  } 