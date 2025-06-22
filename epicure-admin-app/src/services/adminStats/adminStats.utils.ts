import { CardItem } from "@/types/interfaces/cardItem";
import { Store, Soup, ChefHat } from "lucide-react";
import { fetchAll } from "../dishes/dishes.api";
import { fetchRestaurants } from "../restaurants/restaurants.api";
import { fetchChefs } from "../chefs/chefs.api";

export const cards: CardItem[] = [
    {
      title: "Restaurants",
      content: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.",
      href: "/restaurants",
      icon: Store,
    },
    {
      title: "Dishes",
      content: "From design elements to functionality, you have complete control to create a unique and personalized experience.",
      href: "/dishes",
      icon: Soup,
    },
    {
      title: "Chefs",
      content: "Elements to functionality, you have complete control to create a unique experience.",
      href: "/chefs",
      icon: ChefHat,
    },
  ]

export async function getCollectionsCount(): Promise<number[]> {
    const restaurants = await fetchRestaurants();
    const dishes = await fetchAll();
    const chefs = await fetchChefs();

    return [restaurants.length, dishes.length, chefs.length];
}