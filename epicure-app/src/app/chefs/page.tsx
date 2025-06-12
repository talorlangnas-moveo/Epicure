import { fetchChefs, convertChefToCard } from "@/utils/fetchCards";
import { notFound } from "next/navigation";
import DataDisplay from "@/components/dataDisplay/dataDisplay";
import { chefsFilterOptions } from "@/utils/chefsFilterFunctions";
import { Chef } from "@/types/interfaces/chef";



async function Chefs() {
  const chefs = await fetchChefs();
  const chefsAsCards = chefs.map(convertChefToCard);

  if (!chefs) {
    notFound();
  }
  
  return (
    <DataDisplay<Chef>
      data={chefs}
      dataAsCards={chefsAsCards}
      filterOptions={chefsFilterOptions}
      title="Chefs"
      className="chefsBarContainer"
    />
  );
}

export default Chefs;


