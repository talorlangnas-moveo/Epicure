"use client";

import { DishColumns } from "@/app/dishes/dish-columns";
import { toast } from "sonner";
import { useState } from "react";
import { DishColumn } from "@/types/columns/dish.column";
import { DataTable } from "@/components/ui/data-table";
import {
  createDish,
  deleteDish,
  updateDish,
} from "@services/dishes/dishes.api";
import { convertDishToCulomn } from "@services/dishes/dishes.utils";
import { DishForm } from "@/components/dish-form";

interface DishesTableProps {
  data: DishColumn[];
}

export default function DishesTable({
  data: initialData,
}: DishesTableProps) {
  const [data, setData] = useState<DishColumn[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async (dish: DishColumn) => {
    try {
      await deleteDish(dish._id);
      setData((prev) => prev.filter((d) => d._id !== dish._id));
      toast.success(`${dish.name} Dish deleted successfully`);
    } catch (error) {
      toast.error(`Failed to delete ${dish.name} restaurant`);
    }
  };

  const handleEdit = async (
    dish: DishColumn,
    dataToUpdate: Partial<DishColumn>
  ) => {
    try {
      const updatedDish = await updateDish(
        dish._id,
        dataToUpdate
      );
      const updatedDishAsColumn = await convertDishToCulomn(
        updatedDish
      );
      setData((prev) =>
        prev.map((d) =>
          d._id === dish._id ? updatedDishAsColumn : d
        )
      );
      return updatedDishAsColumn;
    } catch (error) {
      throw error;
    }
  };

  const handleAdd = async (newDish: Partial<DishColumn>) => {
    try {
      const res = await createDish(newDish);
      const newDishAsColumn = await convertDishToCulomn(res);
      setData((prev) => [...prev, newDishAsColumn]);
      return newDishAsColumn;
    } catch (error) {
      throw error;
    }
  };

  return (
    <DataTable
      data={data}
      columns={DishColumns({
        onDelete: handleDelete,
        onEdit: handleEdit,
      })}
      formComponent={
        <DishForm
          mode="create"
          setIsOpen={setIsDialogOpen}
          onAdd={handleAdd}
        />
      }
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
}
