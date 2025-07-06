import { Identifiers } from "./identifiers";
import { Chef } from "./chef";

export interface Restaurant extends Identifiers {
  chef?: Chef;
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