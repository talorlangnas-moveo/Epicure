"use client";

import { ChefColumns } from "@/app/chefs/chef-columns";
import { toast } from "sonner";
import { useState } from "react";
import { ChefColumn } from "@/types/columns/chef.column";
import { DataTable } from "@/components/ui/data-table";
import {
  createChef,
  deleteChef,
  updateChef,
} from "@services/chefs/chefs.api";
import { convertChefToColumn } from "@services/chefs/chefs.utils";
import { ChefForm } from "@/components/chef-form";

interface ChefsTableProps {
  data: ChefColumn[];
}

export default function ChefsTable({
  data: initialData,
}: ChefsTableProps) {
  const [data, setData] = useState<ChefColumn[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async (chef: ChefColumn) => {
    try {
      await deleteChef(chef._id);
      setData((prev) => prev.filter((c) => c._id !== chef._id));
      toast.success(`${chef.name} Dish deleted successfully`);
    } catch (error) {
      toast.error(`Failed to delete ${chef.name} restaurant`);
    }
  };

  const handleEdit = async (
    chef: ChefColumn,
    dataToUpdate: Partial<ChefColumn>
  ) => {
    try {
      const updatedChef = await updateChef(
        chef._id,
        dataToUpdate
      );
      const updatedChefColumn = convertChefToColumn(
        updatedChef
      );
      setData((prev) =>
        prev.map((c) =>
          c._id === chef._id ? updatedChefColumn : c
        )
      );
      return updatedChefColumn;
    } catch (error) {
      throw error;
    }
  };

  const handleAdd = async (newChef: Partial<ChefColumn>) => {
    try {
      const res = await createChef(newChef);
      const newChefAsColumn = convertChefToColumn(res);
      setData((prev) => [...prev, newChefAsColumn]);
      return newChefAsColumn;
    } catch (error) {
      throw error;
    }
  };

  return (
    <DataTable
      data={data}
      columns={ChefColumns({
        onDelete: handleDelete,
        onEdit: handleEdit,
      })}
      formComponent={
        <ChefForm
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
