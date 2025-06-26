import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";
import { getSelectItemMap } from "@/utils/utilsFunctions";

interface RestaurantsLayoutProps {
  children: React.ReactNode;
}

export default async function RestaurantsLayout({
  children,
}: RestaurantsLayoutProps) {
  const restaurants = await fetchRestaurants();
  const restaurantsAsColumns = await Promise.all(restaurants.map(convertRestaurantToColumn));
  const chefs = await fetchChefs();
  const chefsColumns = chefs.map(convertChefToColumn);
  const chefsSelectItems = getSelectItemMap(chefsColumns);

  return <section>{children}</section>;
}
