import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import DataDisplay from "@/components/ui/data-display";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";

  
  export default async function ChefsPage() {
    const chefs = await fetchChefs();
    const chefsColumns = chefs.map(convertChefToColumn);
  
    if (!chefs) {
      notFound();
    }
    return (
      <div>
        <DataDisplay title="Chefs">
          <DataTable columns={columns} data={chefsColumns} />
        </DataDisplay>
      </div>
    );
  }