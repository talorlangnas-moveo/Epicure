"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChefHat, MoreHorizontal, SquarePen, Trash2 } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { EntityForm } from "@/types/entityForm";
import DeleteCard from "@/components/delete-card";
import { identifiers } from "@/utils/utilsFunctions";
import { useEntityContext } from "@/components/entityContext";
import { ChefOfTheWeek } from "@/types/interfaces/chefOfTheWeek";
import { toast } from "sonner";

interface DataTableRowActionsProps<TData extends identifiers, P> {
  row: Row<TData>;
  deleteCallback: (id: string) => Promise<TData>;
  editForm: EntityForm<TData>;
  setChefOfTheWeekCallback?: (id: string) => Promise<ChefOfTheWeek | null>;
  variant?: "default" | "chef";
}

export default function DataTableRowAction<TData extends identifiers, P>({
  row,
  editForm,
  deleteCallback,
  setChefOfTheWeekCallback,
  variant = "default",
}: DataTableRowActionsProps<TData, P>) {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { onDelete } = useEntityContext<TData, TData>();
  return (
    <>
      <ResponsiveDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
      >
        {editForm({
          entity: row.original,
          setIsOpen: setIsEditOpen,
          mode: "update",
        })}
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      >
        <DeleteCard<TData> onDelete={(value) => onDelete(value, deleteCallback)} setIsOpen={setIsDeleteOpen} value={row.original} />
      </ResponsiveDialog>
      <div className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 focus:outline-none focus-visible:ring-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {variant === "chef" && setChefOfTheWeekCallback && (
              <DropdownMenuItem
              onClick={async () => {
                const chefOfTheWeek = await setChefOfTheWeekCallback(row.original._id);
                if (chefOfTheWeek) {
                  toast.success(`Chef of the week set successfully to ${chefOfTheWeek.chef.firstName} ${chefOfTheWeek.chef.lastName}`);
                } 
              }}
            >
              <ChefHat className="h-4 w-4 text-neutral-600" />
              <DropdownMenuLabel className="font-bold">Set Chef of the Week</DropdownMenuLabel>
            </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={() => {
                setIsEditOpen(true);
              }}
            >
              <SquarePen className="h-4 w-4 text-neutral-600" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
              <Trash2 className="h-4 w-4 text-red-600" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
