import axios, { AxiosError } from 'axios';
import { Dish } from '@/types/interfaces/dish';
import { toast } from 'sonner';
import { DishColumn } from '@/types/columns/dish.column';

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

export async function updateDish(id: string, data: Partial<DishColumn>): Promise<Dish> {
  try{
    const formData = new FormData();
    
    if (data.imgFile instanceof File) {
      formData.append('image', data.imgFile);
    }
    
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'imgFile' && key !== 'imgUrl' && value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    const res = await axios.put(`${API_BASE_URL}/dishes/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

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

export async function createDish(data: Partial<DishColumn>): Promise<Dish> {
  try {
    const formData = new FormData();
    
    if (data.imgFile instanceof File) {
      formData.append('image', data.imgFile);
    }
    
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'imgFile' && key !== 'imgUrl' && value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    const res = await axios.post(`${API_BASE_URL}/dishes`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

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

