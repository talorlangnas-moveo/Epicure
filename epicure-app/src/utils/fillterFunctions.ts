import { Restaurant } from "@/types/interfaces/Restaurant";
import { CardInfo } from '@components/card/card';
import { convertRestaurantToCard } from "./fetchCards";

export function getNewestRestaurantsAsCards(restaurants: Restaurant[]): CardInfo[] {
    const sortedRestaurants = [...restaurants].sort((a, b) => {
      const dateA = new Date(a.foundedDate);
      const dateB = new Date(b.foundedDate);
      return dateB.getTime() - dateA.getTime();
    });
  
    return sortedRestaurants.slice(0, 3).map(convertRestaurantToCard);
}

export function getMostPopularRestaurantsAsCards(restaurants: Restaurant[]): CardInfo[] {
    const sortedRestaurants = [...restaurants].sort((a, b) => {
        return b.rating - a.rating; 
    });

    return sortedRestaurants.slice(0, 3).map(convertRestaurantToCard);
}

export function getOpenRestaurantsAsCards(restaurants: Restaurant[]): CardInfo[] {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const openRestaurants = restaurants.filter(restaurant => {
        return currentTime >= restaurant.openingTime && currentTime <= restaurant.closingTime;
    });

    return openRestaurants.map(convertRestaurantToCard);
}