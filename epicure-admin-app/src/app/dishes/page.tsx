import { notFound } from "next/navigation";
import DataDisplay from "@/components/ui/data-display";
import { fetchAll } from '@services/dishes/dishes.api';
import { convertDishToCulomn } from '@services/dishes/dishes.utils';
import DishesTable from "@/components/dishes-table";

  export default async function DishesPage() {
    const dishes = await fetchAll();
    const dishesAsColumns = await Promise.all(dishes.map(convertDishToCulomn));

    if(!dishes) {
      notFound();
    }

    return (
      <div>
        <DataDisplay title="Dishes">
          <DishesTable data={dishesAsColumns} />
        </DataDisplay>
      </div>
    );
  }