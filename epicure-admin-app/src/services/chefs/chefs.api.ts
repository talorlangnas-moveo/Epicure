import axios, { AxiosError } from 'axios';
import { Chef } from '@/types/interfaces/chef';
import { toast } from 'sonner';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchChefs(): Promise<Chef[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs/`);
  return res.data;
}

export async function fetchChefById(id: string): Promise<Chef> {
  const res = await axios.get(`${API_BASE_URL}/chefs/${id}`);
  return res.data;
}

export async function deleteChef(id: string): Promise<Chef> {
  const res = await axios.delete(`${API_BASE_URL}/chefs/${id}`);
  return res.data;
}

export async function updateChef(id: string, data: Partial<Chef>): Promise<Chef> {
  try{
    const res = await axios.put(`${API_BASE_URL}/chefs/${id}`, data);
    toast.success("Dish updated successfully");
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message);
    } else {
      toast.error("Failed to update dish");
    }
   
    throw error;
  }
}

export async function createChef(data: Partial<Chef>): Promise<Chef> {
  try {
    const res = await axios.post(`${API_BASE_URL}/chefs`, data);
    toast.success("Dish created successfully");
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message);
    } else {
      toast.error("Failed to create dish");
    }
    throw error;
  }
}
