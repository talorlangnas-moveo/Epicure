import axios, { AxiosError } from 'axios';
import { Restaurant } from '@/types/interfaces/restaurant';
import { toast } from 'sonner';
import { RestaurantColumn } from '@/types/columns/restaurant.column';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const res = await axios.get(`${API_BASE_URL}/restaurants/`);
  return res.data;
}

export async function fetchRestaurantById(id: string): Promise<Restaurant | null> {
  try{
    const res = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
}

export async function deleteRestaurant(id: string): Promise<RestaurantColumn> {
  const res = await axios.delete(`${API_BASE_URL}/restaurants/${id}`);
  return res.data;
}

export async function updateRestaurant(id: string, data: Partial<RestaurantColumn>): Promise<Restaurant> {
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

    const res = await axios.put(`${API_BASE_URL}/restaurants/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    toast.success("Restaurant updated successfully");
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message);
    } else {
      toast.error("Failed to update restaurant");
    }
   
    throw error;
  }
}

export async function createRestaurant(data: Partial<RestaurantColumn>): Promise<Restaurant> {
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

    const res = await axios.post(`${API_BASE_URL}/restaurants`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    toast.success("Restaurant created successfully");
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message);
    } else {
      toast.error("Failed to create restaurant");
    }
    throw error;
  }
}


