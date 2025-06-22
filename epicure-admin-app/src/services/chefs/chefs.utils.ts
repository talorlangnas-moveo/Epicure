import { ChefColumn } from '@/types/columns/chef.column';
import { Chef } from '@/types/interfaces/chef';

export function convertChefToColumn(chef: Chef): ChefColumn {
  return {
    _id: chef._id,
    imgUrl: chef.imgUrl,
    firstName: chef.firstName,
    lastName: chef.lastName,
    name: `${chef.firstName} ${chef.lastName}`,
    description: chef.description,
    foundedDate: chef.foundedDate,
    numberOfViews: chef.numberOfViews,   
  };
}