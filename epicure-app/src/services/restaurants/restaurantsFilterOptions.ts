"use client";

import { FilterOption } from "@/types/interfaces/filterOption";
import { getNewestRestaurantsAsCards, getMostPopularRestaurantsAsCards, getOpenRestaurantsAsCards } from "./restaurants.api";

export const restaurantsFilterOptions: FilterOption[] = [
  { id: "1", label: "All" },
  { id: "2", label: "New", filterFn: getNewestRestaurantsAsCards },
  { id: "3", label: "Most Popular", filterFn: getMostPopularRestaurantsAsCards },
  { id: "4", label: "Open Now", filterFn: getOpenRestaurantsAsCards },
  { id: "5", label: "Map View", desktopOnly: true },
];

export const filterByRangeOptions: FilterOption[] = [
  { id: "1", label: "Price Range", desktopOnly: true },
  { id: "2", label: "Distance", desktopOnly: true },
  { id: "3", label: "Rating", desktopOnly: true },
];

export const filterDishTypesOptions: FilterOption[] = [
  { id: "1", label: "Breakfast" },
  { id: "2", label: "Lunch" },
  { id: "3", label: "Dinner" },
];