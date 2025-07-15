"use client";

import { ChefColumn } from "@/types/columns/chef.column";
import { Chef } from "@/types/interfaces/chef";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TextPopover } from "@/components/ui/text-popover";
import DataTableRowAction from "@/components/data-table-row-action";
import { ChefForm } from "@/components/chef-form";
import { deleteChef, setChefOfTheWeek } from "@/services/chefs/chefs.api";
import { API_BASE_URL } from "@/utils/constants";

export function ChefColumns(): ColumnDef<ChefColumn>[] {
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
      accessorKey: "numberOfViews",
      header: ({ column }) => {
        return (
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Number of Views
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => {
        const numViews = row.getValue<number>("numberOfViews");
        return (
          <div className="flex items-center gap-1 justify-center">
            <Eye className="h-4 w-4" />
            {numViews}
          </div>
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
          <DataTableRowAction<ChefColumn, Chef>
            row={row}
            deleteCallback={deleteChef}
            editForm={ChefForm}
            setChefOfTheWeekCallback={setChefOfTheWeek}
            variant="chef"
          />
        );
      },
    },
  ];
}
