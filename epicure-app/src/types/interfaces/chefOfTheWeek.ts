import { Chef } from '@interfaces/chef';

export interface ChefOfTheWeek {
  _id: string;
  chef: Chef;
  createdAt: Date;
  updatedAt: Date;
}