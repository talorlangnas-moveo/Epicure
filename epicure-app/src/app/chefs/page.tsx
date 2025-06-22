import { convertChefToCard } from "@/services/chefs/chefs.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { notFound } from "next/navigation";
import DataDisplay from "@/components/dataDisplay/dataDisplay";
import { chefsFilterOptions } from "@/services/chefs/chefsFilterOptions";


async function Chefs() {
  const chefs = await fetchChefs();
  const chefsAsCards = chefs.map(convertChefToCard);

  if (!chefs) {
    notFound();
  }
  
  return (
    <DataDisplay
      dataAsCards={chefsAsCards}
      filterOptions={chefsFilterOptions}
      title="Chefs"
      className="chefsBarContainer"
    />
  );
}

export default Chefs;


