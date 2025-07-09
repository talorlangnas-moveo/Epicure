import axios from 'axios';
import { Chef } from '@/types/interfaces/chef';
import { CardInfo } from '@/components/card/card';
import { convertChefToCard } from './chefs.utils';
import { ChefOfTheWeek } from '@/types/interfaces/chefOfTheWeek';

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

export async function getNewestChefsAsCards(): Promise<CardInfo[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs/`, {
    params: {
      foundedDate: 'new',
    },
  });

  const chefs: Chef[] = res.data;
  const chefsAsCards = await Promise.all(chefs.map(convertChefToCard));
  return chefsAsCards;
}

export async function getMostViewedChefsAsCards(): Promise<CardInfo[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs/`, {
    params: {
      numberOfViews: 'mostPopular',
    },
  });

  const chefs: Chef[] = res.data;
  const chefsAsCards = await Promise.all(chefs.map(convertChefToCard));
  return chefsAsCards;
}

export async function getChefsByName(name: string): Promise<Chef[]> {
  const res = await axios.get(`${API_BASE_URL}/chefs`, {
    params: {
      name,
    },
  });
  return res.data;
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
    console.log('chefOfTheWeek: ', chefOfTheWeek);
    return chefOfTheWeek;    
  } catch (error) {
    console.error('Fetch operation failed:', error);
    return null;
  }
}