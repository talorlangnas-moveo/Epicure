import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { mapRestaurantsToIdName } from "@/utils/template.utils";

export default async function Template({ children }: { children: React.ReactNode }) {
    const restaurants = await fetchRestaurants();
    const restaurantMap = mapRestaurantsToIdName(restaurants);
    console.log("restaurantMap: ", restaurantMap);

  return (
    <div>
      <Breadcrumbs itemsMap={restaurantMap} />
      {children}
    </div>
  );
}
