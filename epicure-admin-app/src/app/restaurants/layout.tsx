import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";
import { getSelectItemMap } from "@/utils/utilsFunctions";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { Restaurant } from "@/types/interfaces/restaurant";

import { EntityProvider } from "@/components/entityContext";

interface RestaurantsLayoutProps {
  children: React.ReactNode;
}

export default async function RestaurantsLayout({
  children,
}: RestaurantsLayoutProps) {
  const restaurants = await fetchRestaurants();
  const restaurantsAsColumns = await Promise.all(
    restaurants.map(convertRestaurantToColumn)
  );
  const chefs = await fetchChefs();
  const chefsColumns = await Promise.all(chefs.map(convertChefToColumn));
  const chefsSelectItems = getSelectItemMap(chefsColumns);

  return (
    <EntityProvider<RestaurantColumn, Restaurant>
      data={restaurantsAsColumns}
      items={chefsSelectItems}
    >
      <section>{children}</section>
    </EntityProvider>
  );
}

