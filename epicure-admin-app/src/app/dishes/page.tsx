import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import DataDisplay from "@/components/ui/data-display";
import { fetchAll } from '@services/dishes/dishes.api';
import { convertDishToCulomn } from '@services/dishes/dishes.utils';

  export default async function DishesPage() {
    const dishes = await fetchAll();
    const dishesAsColumns = await Promise.all(dishes.map(convertDishToCulomn));

    if(!dishes) {
      notFound();
    }

    return (
      <div>
        <DataDisplay title="Dishes">
          <DataTable columns={columns} data={dishesAsColumns} />
        </DataDisplay>
      </div>
    );
  }