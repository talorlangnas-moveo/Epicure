import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
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
        <DataTable columns={columns} data={restaurantsAsColumns} />
      </DataDisplay>
    </div>
  );
}
