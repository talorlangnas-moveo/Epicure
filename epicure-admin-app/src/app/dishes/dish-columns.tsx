"use client";

import { DishColumn } from "@/types/columns/dish.column";
import { Dish } from "@/types/interfaces/dish";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDishCategoryIcon } from "@/services/dishes/dishes.utils";
import { Button } from "@/components/ui/button";
import { TextPopover } from "@/components/ui/text-popover";
import DataTableRowAction from "@/components/data-table-row-action";
import { DishForm } from "@/components/dish-form";
import { deleteDish } from "@services/dishes/dishes.api";
import { API_BASE_URL } from "@/utils/constants";

export function DishColumns(): ColumnDef<DishColumn>[] {
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
      accessorKey: "dishCategory",
      header: () => <div className="text-center">Dish Category</div>,
      cell: ({ row }) => {
        const category = row.getValue<string>("dishCategory");
        const { icon: Icon, className } = getDishCategoryIcon(category);

        return (
          <div className="flex items-center gap-1 justify-center">
            <div className="text-center">
              <Icon className={`mx-auto h-5 w-5 ${className}`} />
            </div>
            {category}
          </div>
        );
      },
    },
    {
      accessorKey: "restaurantName",
      header: () => <div className="text-center">Restaurant</div>,
      cell: ({ row }) => {
        return (
          <div className="text-center">{row.getValue("restaurantName")}</div>
        );
      },
    },
    {
      accessorKey: "description",
      header: () => <div className="text-center">Description</div>,
      cell: ({ row }) => {
        const description = row.getValue<string>("description");

        return (
          <div className="text-center">
            <TextPopover description={description} />
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: () => <div className="text-center">Price</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "ILS",
        }).format(amount);
        const currencySymbol = formatted.charAt(0);
        const priceValue = formatted.slice(1);

        return (
          <div className="text-center font-medium">
            <span className="mr-1">{currencySymbol}</span>
            {priceValue}
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DataTableRowAction<DishColumn, Dish>
            row={row}
            deleteCallback={deleteDish}
            editForm={DishForm}
          />
        );
      },
    },
  ];
}
