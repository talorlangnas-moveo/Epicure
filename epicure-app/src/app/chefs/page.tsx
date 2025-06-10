import { fetchChefs, convertChefToCard } from "@/utils/fetchCards";
import { notFound } from "next/navigation";
import DataDisplay from "@/components/dataDisplay_tmp/dataDisplay_tmp";



async function Chefs() {
  const chefs = await fetchChefs();
  const chefsAsCards = chefs.map(convertChefToCard);

  if (!chefs) {
    notFound();
  }
  
  return (
    <h1 style={{marginTop: "100px"}}>Chefs Page</h1>
  );
}

export default Chefs;


