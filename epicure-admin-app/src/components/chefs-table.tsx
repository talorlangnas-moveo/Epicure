"use client";

import { notFound } from "next/navigation";
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
import { useEntityContext } from "@/components/entityContext";
import { Chef } from "@/types/interfaces/chef";

export default function ChefsTable() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data } = useEntityContext<ChefColumn, Chef>();

  if (!data) {
    notFound();
  }

  return (
    <DataTable
      data={data}
      columns={ChefColumns()}
      formComponent={
        <ChefForm mode="create" setIsOpen={setIsDialogOpen} />
      }
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
}
