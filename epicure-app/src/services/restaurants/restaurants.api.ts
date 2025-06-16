import axios from 'axios';
import { Restaurant } from '@/types/interfaces/restaurant';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/`);
  return res.data;
}

export async function fetchRestaurantById(id: string): Promise<Restaurant> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
  return res.data;
}
