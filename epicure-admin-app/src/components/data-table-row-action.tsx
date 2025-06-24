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
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { EntityForm } from "@/types/entityForm";

interface WithId<T> {
  _id: string;
}
interface DataTableRowActionsProps<TData extends WithId<string>> {
  row: Row<TData>;
  onDelete: (value: TData) => void;
  editForm: EntityForm<TData>;
  deleteForm: EntityForm<TData>;
  onEdit?: (entity: TData, updatedData: Partial<TData>) => Promise<TData>;
}

export default function DataTableRowAction<TData extends WithId<string>>({
  row,
  onDelete,
  editForm,
  deleteForm,
  onEdit,
}: DataTableRowActionsProps<TData>) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const restaurant = row.original;

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
          onEdit: onEdit,
        })}
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      >
        {deleteForm({ entity: row.original, setIsOpen: setIsDeleteOpen })}
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
            <DropdownMenuItem
              onClick={() => {
                setIsEditOpen(true);
              }}
            >
              <SquarePen className="h-4 w-4 text-neutral-600" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(restaurant)}>
              <Trash2 className="h-4 w-4 text-red-600" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
