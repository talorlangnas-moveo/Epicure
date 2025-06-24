import { notFound } from "next/navigation";
import RestaurantsTable from "@/components/restaurants-table";
import DataDisplay from "@/components/ui/data-display";
import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsColumns = await Promise.all(restaurants.map(convertRestaurantToColumn));

  if (!restaurants) {
    notFound();
  }

  return (
    <div>
      <DataDisplay title="Restaurants">
        <RestaurantsTable data={restaurantsAsColumns} />
      </DataDisplay>
    </div>
  );
}
