import { fetchRestaurantById, fetchDishesByRestaurantId, convertDishToCard } from "@/utils/fetchCards";
import { notFound } from "next/navigation";
import DishesDisplay from "@/components/dishesDisplay/dishesDisplay";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  
  const restaurant = await fetchRestaurantById(params.id);
  const dishes = await fetchDishesByRestaurantId(params.id);
  const dishAsCards = dishes.map(convertDishToCard);

  if (!restaurant) {
    notFound();
  }

  return (
    <DishesDisplay restaurant={restaurant} dishCards={dishAsCards} />
  );
}
