import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import {mapIdsToNames} from "@/utils/template.utils";

export default async function Template({ children }: { children: React.ReactNode }) {
    const restaurants = await fetchRestaurants();
    const restaurantMap = mapIdsToNames(restaurants);

  return (
    <div>
      <Breadcrumbs itemsMap={restaurantMap} />
      {children}
    </div>
  );
}
