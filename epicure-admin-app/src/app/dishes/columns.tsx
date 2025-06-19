"use client";

import { DishColumn } from "@/types/columns/dishes.column";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDishCategoryIcon } from "@/services/dishes/dishes.utils";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TextPopover } from "@/components/ui/text-popover";

export const columns: ColumnDef<DishColumn>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const imageUrl = row.getValue<string>("image");
      const name = row.getValue<string>("name");

      return (
        <Avatar>
          <AvatarImage src={imageUrl} alt={name} />
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
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
    accessorKey: "chefName",
    header: () => <div className="text-center">Chef</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("chefName")}</div>;
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
        <div className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus-visible:ring-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log(row.original.name)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log(row.original.name)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
