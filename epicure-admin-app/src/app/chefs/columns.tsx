"use client";

import { ChefColumn } from "@/types/columns/chef.column";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Eye } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export const columns: ColumnDef<ChefColumn>[] = [
  {
    accessorKey: "imgUrl",
    header: "",
    cell: ({ row }) => {
      const imageUrl = row.getValue<string>("imgUrl");
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
    accessorKey: "numberOfViews",
    header: ({ column }) => {
        return (
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Number of Views
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
    cell: ({ row }) => {
      const numViews = row.getValue<number>("numberOfViews")
      return (
        <div className="flex items-center gap-1 justify-center">
          <Eye className="h-4 w-4" />
          {numViews}
        </div>
      )
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
    accessorKey: "foundedDate",
    header: () => (
      <div className="text-center">Founded Date</div>
    ),
    cell: ({ row }) => {
      const rawDate = row.original.foundedDate
      const date = new Date(rawDate)
      const formatted = date.toLocaleDateString("en-GB")
  
      return <div className="text-center">{formatted}</div>
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
              <DropdownMenuItem onClick={() => console.log(row.original.firstName)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log(row.original.lastName)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
