import axios from 'axios';
import { Chef } from '@/types/interfaces/chef';
import { CardInfo } from '@/components/card/card';
import { convertChefToCard } from './chefs.utils';

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