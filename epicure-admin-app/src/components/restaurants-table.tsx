"use client";

import { notFound } from "next/navigation";
import { RestaurantColumns } from "@/app/restaurants/restaurant-columns";
import { useState } from "react";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { Restaurant } from "@/types/interfaces/restaurant";
import { DataTable } from "@/components/ui/data-table";
import { RestaurantsForm } from "@/components/restaurant-form";
import { useEntityContext } from "@/components/entityContext";

export default function RestaurantsTable() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data } = useEntityContext<RestaurantColumn, Restaurant>();

  if (!data) {
    notFound();
  }

  return (
    <DataTable
      data={data}
      columns={RestaurantColumns()}
      formComponent={
        <RestaurantsForm mode="create" setIsOpen={setIsDialogOpen} />
      }
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
}
