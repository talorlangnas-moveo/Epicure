import { identifiers } from "@/utils/utilsFunctions";
import { Chef } from "./chef";

export interface Restaurant extends identifiers {
    chef?: Chef;
    imgUrl: string;
    rating: string;
    ratingImage?: string;
    openingTime: string;
    closingTime: string;
    foundedDate: Date;
    route?: string;
    createdAt?: Date;
  } 