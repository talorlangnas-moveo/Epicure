import axios, { AxiosError } from 'axios';
import { Dish } from '@/types/interfaces/dish';
import { toast } from 'sonner';

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

export async function deleteDish(id: string): Promise<Dish> {
  const res = await axios.delete(`${API_BASE_URL}/dishes/${id}`);
  return res.data;
}

export async function updateDish(id: string, data: Partial<Dish>): Promise<Dish> {
  try{
    const res = await axios.put(`${API_BASE_URL}/dishes/${id}`, data);
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

export async function createDish(data: Partial<Dish>): Promise<Dish> {
  try {
    const res = await axios.post(`${API_BASE_URL}/dishes`, data);
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

