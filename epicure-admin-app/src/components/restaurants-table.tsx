"use client";

import { RestaurantColumns } from "@/app/restaurants/columns";
import { toast } from "sonner";
import { useState } from "react";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { DataTable } from "@/components/ui/data-table";
import { deleteRestaurant } from "@services/restaurants/restaurants.api";

interface RestaurantsTableProps {
  data: RestaurantColumn[];
}

export default function RestaurantsTable({
  data: initialData,
}: RestaurantsTableProps) {
  const [data, setData] = useState<RestaurantColumn[]>(initialData);

  const handleDelete = async (restaurant: RestaurantColumn) => {
    console.log("Deleting:", restaurant);
    try {
      await deleteRestaurant(restaurant.id);
      setData((prev) => prev.filter((r) => r.id !== restaurant.id));
      toast.success(`${restaurant.name} restaurant deleted successfully`);
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error(`Failed to delete ${restaurant.name} restaurant`);
    }
  };

  const handleEdit = (restaurant: RestaurantColumn) => {
    console.log("Editing:", restaurant);
  };

  return (
    <DataTable
      data={data}
      columns={RestaurantColumns({
        onDelete: handleDelete,
        onEdit: handleEdit,
      })}
    />
  );
}
