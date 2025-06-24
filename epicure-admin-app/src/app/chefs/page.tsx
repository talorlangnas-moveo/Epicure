import { notFound } from "next/navigation";
import DataDisplay from "@/components/ui/data-display";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";
import ChefsTable from "@/components/chefs-table";

export default async function ChefsPage() {
  const chefs = await fetchChefs();
  const chefsColumns = chefs.map(convertChefToColumn);

  if (!chefs) {
    notFound();
  }
  return (
    <div>
      <DataDisplay title="Chefs">
        <ChefsTable data={chefsColumns} />
      </DataDisplay>
    </div>
  );
}
