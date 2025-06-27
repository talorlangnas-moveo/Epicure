import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";
import { getSelectItemMap } from "@/utils/utilsFunctions";
import { DishColumn } from "@/types/columns/dish.column";
import { Dish } from "@/types/interfaces/dish";

import { EntityProvider } from "@/components/entityContext";

interface DishesLayoutProps {
  children: React.ReactNode;
}

export default async function DishesLayout({
  children,
}: DishesLayoutProps) {
    const dishes = await fetchAll();
    const dishesAsColumns = await Promise.all(dishes.map(convertDishToCulomn));
  const chefs = await fetchChefs();
  const chefsColumns = chefs.map(convertChefToColumn);
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

