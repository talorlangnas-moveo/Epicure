import { CardInfo } from '@components/card/card';
import { Restaurant } from '@/types/interfaces/restaurant';

export interface FilterOption {
    id: string;
    label: string;
    filterFn?: (restaurants: Restaurant[]) => CardInfo[];
    desktopOnly?: boolean;
  }