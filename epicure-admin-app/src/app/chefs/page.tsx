import DataDisplay from "@/components/ui/data-display";
import ChefsTable from "@/components/chefs-table";
import EntityCard from "@/components/entity-card";
import { getChefOfTheWeek } from "@/services/chefs/chefs.api";
import { Chef } from "@/types/interfaces/chef";

export default async function ChefsPage() {

  const chefOfTheWeek = await getChefOfTheWeek();
  const chef: Chef | null = chefOfTheWeek?.chef || null;

  return (
    <div>
      <DataDisplay title="Chefs" >
        {chef && <EntityCard title="Chef of the Week" _id={chef._id} name={`${chef.firstName} ${chef.lastName}`} role="Chef" imgUrl={chef.imgUrl} />}
        <ChefsTable />
      </DataDisplay>
    </div>
  );
}
