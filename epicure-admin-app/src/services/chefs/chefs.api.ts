'use server';

import axios, { AxiosError } from 'axios';
import { Chef } from '@/types/interfaces/chef';
import { ChefColumn } from '@/types/columns/chef.column';
import { ChefOfTheWeek } from '@/types/interfaces/chefOfTheWeek';
import { revalidateTag } from 'next/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchChefs(): Promise<Chef[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs/`);
  return res.data;
}

export async function fetchChefById(id: string): Promise<Chef | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/chefs/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching chef by id: ", error);
    return null;
  }
}

export async function deleteChef(id: string): Promise<ChefColumn> {
  const res = await axios.delete(`${API_BASE_URL}/chefs/${id}`);
  return res.data;
}

export async function updateChef(id: string, data: Partial<ChefColumn>): Promise<Chef> {
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

    const res = await axios.put(`${API_BASE_URL}/chefs/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data?.message);
    } else {
      console.error("Failed to update chef");
    }
   
    throw error;
  }
}

export async function createChef(data: Partial<ChefColumn>): Promise<Chef> {
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

    console.log("formData: ", formData);

    const res = await axios.post(`${API_BASE_URL}/chefs`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data?.message);
    } else {
      console.error("Failed to create Chef");
    }
    throw error;
  }
}

export async function getChefOfTheWeek(): Promise<ChefOfTheWeek | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/app-settings/chef-of-the-week`, {
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'default',
      next: { revalidate: 3600, tags: ['chef-of-the-week'] },
    });

    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`);
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const chefOfTheWeek: ChefOfTheWeek = await res.json();
    return chefOfTheWeek;    
  } catch (error) {
    console.error('Fetch operation failed:', error);
    return null;
  }
}

export async function setChefOfTheWeek(id: string): Promise<ChefOfTheWeek | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/app-settings/chef-of-the-week`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chef: id }),
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`);
      throw new Error(`Failed to set chef of the week: ${res.statusText}`);
    }

    const chefOfTheWeek: ChefOfTheWeek = await res.json();
    revalidateTag('chef-of-the-week');
    return chefOfTheWeek;
  } catch (error) {
    console.error('Set chef of the week operation failed:', error);
    return null;
  }
}
