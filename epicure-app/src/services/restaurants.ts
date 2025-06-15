import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Restaurant {
  name: string;
  description: string;
  imgUrl: string;
  rating: number;
  openingTime: string;
  closingTime: string;
  foundedDate: Date;
  createdAt: Date;
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
  const res = await axios.get(`${API_URL}/restaurants`);
  console.log(res.data);
  return res.data;
}