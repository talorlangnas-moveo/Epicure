// import { fetchChefs, convertChefToCard } from "@/utils/fetchCards";
import { convertChefToCard } from "@/services/chefs/chefs.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { notFound } from "next/navigation";
import DataDisplay from "@/components/dataDisplay/dataDisplay";
import { chefsFilterOptions } from "@/services/chefs/chefsFilterFunctions";
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


