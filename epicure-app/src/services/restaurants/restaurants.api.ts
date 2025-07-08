import axios from 'axios';
import { Restaurant } from '@/types/interfaces/restaurant';
import { CardInfo } from '@/components/card/card';
import { convertRestaurantToCard } from './restaurants.utils';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/`);
  return res.data;
}

export async function fetchRestaurantById(id: string): Promise<Restaurant | null> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
  return res.data;
}

export async function fetchRestaurantsByChefId(chefId: string): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/by-chefId`, {
    params: { chefId },
  });
  return res.data;
}

export async function getNewestRestaurantsAsCards(): Promise<CardInfo[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/`, {
    params: {
      foundedDate: 'new',
    },
  });

  const restaurants: Restaurant[] = res.data;
  const restaurantsAsCards = await Promise.all(restaurants.map(convertRestaurantToCard));
  return restaurantsAsCards;
}

export async function getMostPopularRestaurantsAsCards(): Promise<CardInfo[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants`, {
    params: {
      rating: 'mostPopular',
    },
  });

  const restaurants: Restaurant[] = res.data;
  const restaurantsAsCards = await Promise.all(restaurants.map(convertRestaurantToCard));
  return restaurantsAsCards;
}

export async function getOpenRestaurantsAsCards(): Promise<CardInfo[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants`, {
    params: {
      openNow: 'true',
    },
  });

  const restaurants: Restaurant[] = res.data;
  const restaurantsAsCards = await Promise.all(restaurants.map(convertRestaurantToCard));
  return restaurantsAsCards;
}

export async function getRestaurantsByName(name: string): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants`, {
    params: {
      name,
    },
  });
  return res.data;
}