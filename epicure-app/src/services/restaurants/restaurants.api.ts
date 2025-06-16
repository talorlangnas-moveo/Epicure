import axios from 'axios';
import { Restaurant } from '@/types/interfaces/restaurant';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log(API_BASE_URL);

export async function getAllRestaurants(): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/`);
  console.log(res.data);
  return res.data;
}