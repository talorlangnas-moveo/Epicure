import { CardInfo } from '@components/card/card';

export interface FilterOption<T = any> {
    id: string;
    label: string;
    filterFn?: (data: T[]) => CardInfo[];
    desktopOnly?: boolean;
  }