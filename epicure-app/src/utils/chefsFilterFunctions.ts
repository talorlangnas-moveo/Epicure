"use client";

import { Chef } from "@/types/interfaces/chef";
import { CardInfo } from '@components/card/card';
import { convertChefToCard } from "./fetchCards";
import { FilterOption } from "@/types/interfaces/filterOption";

export const chefsFilterOptions: FilterOption[] = [
    { id: "1", label: "All" },
    { id: "2", label: "New", filterFn: getNewestChefsAsCards },
    { id: "3", label: "Most Popular", filterFn: getMostViewedChefsAsCards },
  ];

export function getNewestChefsAsCards(chefs: Chef[]): CardInfo[] {
    const sortedChefs = [...chefs].sort((a, b) => {
      const dateA = new Date(a.foundedDate);
      const dateB = new Date(b.foundedDate);
      return dateB.getTime() - dateA.getTime();
    });
  
    return sortedChefs.slice(0, 3).map(convertChefToCard);
}

export function getMostViewedChefsAsCards(chefs: Chef[]): CardInfo[] {
    const sortedChefs = [...chefs].sort((a, b) => b.numberOfViews - a.numberOfViews);
    return sortedChefs.slice(0, 3).map(convertChefToCard);
}

