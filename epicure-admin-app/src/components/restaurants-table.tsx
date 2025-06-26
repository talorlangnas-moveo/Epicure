"use client";

import { RestaurantColumns } from "@/app/restaurants/restaurant-columns";
import { toast } from "sonner";
import { useState } from "react";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { DataTable } from "@/components/ui/data-table";
import {
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from "@services/restaurants/restaurants.api";
import { convertRestaurantToColumn } from "@services/restaurants/restaurants.utils";
import { RestaurantsForm } from "@/components/restaurant-form";
import { SelectItemOptions } from "@/utils/utilsFunctions";

interface RestaurantsTableProps {
  data: RestaurantColumn[];
  selectItemsMap: SelectItemOptions[];
}

export default function RestaurantsTable({
  data: initialData,
  selectItemsMap,
}: RestaurantsTableProps) {
  const [data, setData] = useState<RestaurantColumn[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async (restaurant: RestaurantColumn) => {
    console.log("Deleting:", restaurant);
    try {
      await deleteRestaurant(restaurant._id);
      setData((prev) => prev.filter((r) => r._id !== restaurant._id));
      toast.success(`${restaurant.name} restaurant deleted successfully`);
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error(`Failed to delete ${restaurant.name} restaurant`);
    }
  };

  const handleEdit = async (
    restaurant: RestaurantColumn,
    dataToUpdate: Partial<RestaurantColumn>
  ) => {
    try {
      const updatedRestaurant = await updateRestaurant(
        restaurant._id,
        dataToUpdate
      );
      const updatedRestaurantAsColumn = await convertRestaurantToColumn(
        updatedRestaurant
      );
      setData((prev) =>
        prev.map((r) =>
          r._id === restaurant._id ? updatedRestaurantAsColumn : r
        )
      );
      return updatedRestaurantAsColumn;
    } catch (error) {
      throw error;
    }
  };

  const handleAdd = async (newRestaurant: Partial<RestaurantColumn>) => {
    try {
      const res = await createRestaurant(newRestaurant);
      const newRestaurantAsColumn = await convertRestaurantToColumn(res);
      setData((prev) => [...prev, newRestaurantAsColumn]);
      return newRestaurantAsColumn;
    } catch (error) {
      throw error;
    }
  };

  return (
    <DataTable
      data={data}
      columns={RestaurantColumns({
        onDelete: handleDelete,
        onEdit: handleEdit,
        selectItemsMap: selectItemsMap,
      })}
      formComponent={
        <RestaurantsForm
          mode="create"
          setIsOpen={setIsDialogOpen}
          onAdd={handleAdd}
          selectItemsMap={selectItemsMap}
        />
      }
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
}
