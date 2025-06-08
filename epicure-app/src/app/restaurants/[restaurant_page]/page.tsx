import { fetchRestaurants } from "@/utils/fetchCards";
import { notFound } from "next/navigation";
import RestaurantHomePage from "@components/restaurantHomePage/restaurantHomePage";

interface RestaurantPageProps {
  params: {
    restaurant_page: string;
  };
  searchParams: {
    id: string;
  };
}

export default async function RestaurantPage({ searchParams }: RestaurantPageProps) {
  const restaurants = await fetchRestaurants();
  const restaurant = restaurants.find(
    (r) => r.id === searchParams.id
  );
  if (!restaurant) {
    notFound();
  }

  console.log(restaurant);

  return (
    <RestaurantHomePage restaurant={restaurant} />
  );
}
