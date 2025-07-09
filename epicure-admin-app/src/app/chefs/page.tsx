import DataDisplay from "@/components/ui/data-display";
import ChefsTable from "@/components/chefs-table";

export default async function ChefsPage() {
  return (
    <div>
      <DataDisplay title="Chefs" >
        <ChefsTable />
      </DataDisplay>
    </div>
  );
}
