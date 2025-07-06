import { convertDishToCard } from "@/services/dishes/dishes.utils";
import { fetchDishesByRestaurantId } from "@/services/dishes/dishes.api";
import { fetchRestaurantById } from "@/services/restaurants/restaurants.api";
import { notFound } from "next/navigation";
import DishesDisplay from "@/components/dishesDisplay/dishesDisplay";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = await fetchRestaurantById(params.id);
  
  if (!restaurant) {
    notFound();
  }
  
  const dishes = await fetchDishesByRestaurantId(params.id);
  const dishAsCards = dishes.map(convertDishToCard);

  return (
    <DishesDisplay restaurant={restaurant} dishCards={dishAsCards} imageContainerStyle="large" />
  );
}
