import { CardInfo } from '@/components/card/card';
import { Restaurant } from '@/types/interfaces/restaurant';
import { Dish } from '@/types/interfaces/dish';
import { CardType } from '@/types/cardType';
import dishCardsData from '@/data/dishCards';

import { chefRestaurantsCards } from '@/data/chefInfo';
import { restaurants } from '@/data/restaurantData';
import { dishData } from '@/data/dishData';
import { chefs } from '@/data/chefsData';
import { Chef } from '@interfaces/chef';

export function convertRestaurantToCard(restaurant: Restaurant): CardInfo {
  return {
    id: restaurant.id,
    type: 'restaurant' as CardType,
    title: restaurant.title,
    description: restaurant.description,
    imgUrl: restaurant.imgUrl,
    rating: restaurant.rating,
    ratingImage: restaurant.ratingImage,
  };
}

export function convertDishToCard(dish: Dish): CardInfo {
  return {
    id: dish.id,
    type: 'dish' as CardType,
    title: dish.title,
    description: dish.description,
    imgUrl: dish.imgUrl,
    price: dish.price,
    dishCategoryLogo: dish.dishCategoryLogo,
  };
}

export async function fetchDishCards(): Promise<CardInfo[]> {
  return dishCardsData as CardInfo[];
}

export async function fetchChefRestCards(): Promise<CardInfo[]> {
  return chefRestaurantsCards as CardInfo[];
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  return restaurants;
}

export async function fetchRestaurantsAsCards(): Promise<CardInfo[]> {
  const restaurants = await fetchRestaurants();
  return restaurants.map(convertRestaurantToCard);
}

export async function fetchRestaurantById(id: string): Promise<Restaurant | undefined> {
  return restaurants.find(restaurant => restaurant.id === id);
}

export async function fetchDishesByRestaurantId(restaurantId: string): Promise<Dish[]> {
  return dishData.filter(dish => dish.restaurantId === restaurantId);
}

export async function fetchChefs(): Promise<Chef[]> {
  return chefs;
}

export function convertChefToCard(chef: Chef): CardInfo {
  return {
    id: chef.id,
    imgUrl: chef.imgUrl,
  };
}

export async function fetchChefById(id: string): Promise<Chef | undefined> {
  return chefs.find(chef => chef.id === id);
}
