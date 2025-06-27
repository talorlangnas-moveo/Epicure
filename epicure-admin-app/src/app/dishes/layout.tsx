import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";
import { fetchAll } from "@services/dishes/dishes.api";
import { convertDishToCulomn } from "@services/dishes/dishes.utils";
import { getSelectItemMap } from "@/utils/utilsFunctions";
import { DishColumn } from "@/types/columns/dish.column";
import { Dish } from "@/types/interfaces/dish";

import { EntityProvider } from "@/components/entityContext";

interface DishesLayoutProps {
  children: React.ReactNode;
}

export default async function DishesLayout({ children }: DishesLayoutProps) {
  const dishes = await fetchAll();
  const dishesAsColumns = await Promise.all(dishes.map(convertDishToCulomn));
  const restaurants = await fetchRestaurants();
  const restaurantsAsColumns = await Promise.all(
    restaurants.map(convertRestaurantToColumn)
  );
  const restaurantsSelectItems = getSelectItemMap(restaurantsAsColumns);

  return (
    <EntityProvider<DishColumn, Dish>
      data={dishesAsColumns}
      items={restaurantsSelectItems}
    >
      <section>{children}</section>
    </EntityProvider>
  );
}
