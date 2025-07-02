import DataDisplay from "@/components/ui/data-display";
import DishesTable from "@/components/dishes-table";

  export default async function DishesPage() {

    return (
      <div>
        <DataDisplay title="Dishes">
          <DishesTable />
        </DataDisplay>
      </div>
    );
  }