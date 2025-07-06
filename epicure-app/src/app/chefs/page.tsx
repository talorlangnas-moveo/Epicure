import { convertChefToCard } from "@/services/chefs/chefs.utils";
import { fetchChefs } from "@/services/chefs/chefs.api";
import { notFound } from "next/navigation";
import DataDisplay from "@/components/dataDisplay/dataDisplay";
import { chefsFilterOptions } from "@/services/chefs/chefsFilterOptions";


async function Chefs() {
  const chefs = await fetchChefs();
  
  if (!chefs) {
    notFound();
  }

  const chefsAsCards = await Promise.all(chefs.map(convertChefToCard));
  
  return (
    <DataDisplay
      dataAsCards={chefsAsCards}
      filterOptions={chefsFilterOptions}
      title="Chefs"
      className="chefsBarContainer"
      imageContainerStyle="large"
      cardsStyle="chefCard"
    />
  );
}

export default Chefs;


