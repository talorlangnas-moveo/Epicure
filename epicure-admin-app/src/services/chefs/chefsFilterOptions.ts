"use client";

import { FilterOption } from "@/types/interfaces/filterOption";
import { getNewestChefsAsCards, getMostViewedChefsAsCards } from "./chefs.api";

export const chefsFilterOptions: FilterOption[] = [
  { id: "1", label: "All" },
  { id: "2", label: "New", filterFn: getNewestChefsAsCards },
  { id: "3", label: "Most Popular", filterFn: getMostViewedChefsAsCards },
];

