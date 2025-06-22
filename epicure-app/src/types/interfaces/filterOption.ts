import { CardInfo } from '@components/card/card';

export interface FilterOption {
    id: string;
    label: string;
    filterFn?: () => Promise<CardInfo[]>;
    desktopOnly?: boolean;
  }