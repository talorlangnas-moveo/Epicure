import RestaurantsTable from "@/components/restaurants-table";
import DataDisplay from "@/components/ui/data-display";

export default async function RestaurantsPage() {
  return (
    <div>
      <DataDisplay title="Restaurants">
        <RestaurantsTable />
      </DataDisplay>
    </div>
  );
}
