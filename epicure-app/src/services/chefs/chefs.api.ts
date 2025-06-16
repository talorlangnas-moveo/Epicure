import axios from 'axios';
import { Chef } from '@/types/interfaces/chef';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchChefs(): Promise<Chef[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs/`);
  return res.data;
}

export async function fetchChefById(id: string): Promise<Chef> {
  const res = await axios.get(`${API_BASE_URL}/chefs/${id}`);
  return res.data;
}