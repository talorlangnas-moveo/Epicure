import { Identifiers } from "@/types/interfaces/identifiers";
import { Restaurant } from "@/types/interfaces/restaurant";

export function mapRestaurantsToIdName(restaurants: Restaurant[]): Record<string, string> {
  return restaurants.reduce((map, restaurant) => {
    map[restaurant._id] = restaurant.name;
    return map;
  }, {} as Record<string, string>);
}

export function mapRestaurantIdsToNames(restaurants: Restaurant[]): Map<string, string> {
    const restaurantMap = new Map<string, string>();
  
    restaurants.forEach((restaurant) => {
        restaurantMap.set(restaurant._id, restaurant.name);
    });
    
    return restaurantMap;
}

// Generic version for any type that implements Identifiers
export function mapIdsToNames<T extends Identifiers>(items: T[]): Map<string, string> {
    const identifiersMap = new Map<string, string>();
  
    items.forEach((item) => {
        identifiersMap.set(item._id, item.name);
    });
    
    return identifiersMap;
}

// export default async function mapIdsToNames<T extends Identifiers>(
//     items: T[]
//   ): Promise<Map<string, string>> {
//     const identifiersMap = new Map<string, string>();
  
//     items.forEach((item) => {
//         identifiersMap.set(item._id, item.name);
//       });
    
//       return identifiersMap;
//   }

