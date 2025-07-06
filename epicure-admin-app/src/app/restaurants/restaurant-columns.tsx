"use client";

import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RestaurantsForm } from "@/components/restaurant-form";
import DataTableRowAction from "@/components/data-table-row-action";
import { deleteRestaurant } from "@/services/restaurants/restaurants.api";
import { Restaurant } from "@/types/interfaces/restaurant";
import { API_BASE_URL } from "@/utils/constants";


export function RestaurantColumns(): ColumnDef<RestaurantColumn>[] {
  return [
    {
      accessorKey: "imgUrl",
      header: "",
      cell: ({ row }) => {
        const imageUrl = row.getValue<string>("imgUrl");
        const name = row.getValue<string>("name");

        return (
          <Avatar>
            <AvatarImage src={`${API_BASE_URL}/${imageUrl}`} alt={name} />
            <AvatarFallback>{name?.[0]}</AvatarFallback>
          </Avatar>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue("name")}</div>;
      },
    },
    {
      accessorKey: "chefName",
      header: () => <div className="text-center">Chef</div>,
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue("chefName")}</div>;
      },
    },
    {
      accessorKey: "rating",
      header: () => <div className="text-center">Rating</div>,
      cell: ({ row }) => {
        const rating = row.getValue<number>("rating");
        return (
          <div className="flex items-center gap-1 justify-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {rating}
          </div>
        );
      },
    },
    {
      accessorKey: "openingTime",
      header: () => <div className="text-center">Opening Time</div>,
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue("openingTime")}</div>;
      },
    },
    {
      accessorKey: "closingTime",
      header: () => <div className="text-center">Closing Time</div>,
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue("closingTime")}</div>;
      },
    },
    {
      accessorKey: "foundedDate",
      header: () => <div className="text-center">Founded Date</div>,
      cell: ({ row }) => {
        const rawDate = row.original.foundedDate;
        const date = new Date(rawDate);
        const formatted = date.toLocaleDateString("en-GB");

        return <div className="text-center">{formatted}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DataTableRowAction<RestaurantColumn, Restaurant>
            row={row}
            deleteCallback={deleteRestaurant}
            editForm={RestaurantsForm}
          />
        );
      },
    },
  ];
}
