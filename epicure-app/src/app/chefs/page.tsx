import { fetchChefs } from "@/utils/fetchCards";
import { notFound } from "next/navigation";


async function Chefs() {
  const chefs = await fetchChefs();
  console.log(chefs);

  if (!chefs) {
    notFound();
  }
  
  return (
    <h1 style={{marginTop: "100px"}}>Chefs Page</h1>
  );
}

export default Chefs;


