"use client";

import { notFound } from "next/navigation";
import { DishColumns } from "@/app/dishes/dish-columns";
import { useState } from "react";
import { DishColumn } from "@/types/columns/dish.column";
import { DataTable } from "@/components/ui/data-table";
import { DishForm } from "@/components/dish-form";
import { useEntityContext } from "@/components/entityContext";
import { Dish } from "@/types/interfaces/dish";

export default function DishesTable() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data } = useEntityContext<DishColumn, Dish>();

  if (!data) {
    notFound();
  }

  return (
    <DataTable
      data={data}
      columns={DishColumns()}
      formComponent={
        <DishForm mode="create" setIsOpen={setIsDialogOpen} />
      }
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
}
