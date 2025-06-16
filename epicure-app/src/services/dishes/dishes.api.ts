import axios from 'axios';
import { Dish } from '@/types/interfaces/dish';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAll(): Promise<Dish[]> {
  const res = await axios.get(`${API_BASE_URL}/dishes/`);
  return res.data;
}

export async function fetchDishesByRestaurantId(restaurantId: string): Promise<Dish[]> {
  const res = await axios.get(`${API_BASE_URL}/dishes/by-restaurantId`,{
    params: {
      restaurantId: restaurantId,
    },
  });
  return res.data;
}