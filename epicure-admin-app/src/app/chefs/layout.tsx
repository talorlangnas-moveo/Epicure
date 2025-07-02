import { fetchChefs } from "@/services/chefs/chefs.api";
import { convertChefToColumn } from "@/services/chefs/chefs.utils";
import { ChefColumn } from "@/types/columns/chef.column";
import { Chef } from "@/types/interfaces/chef";


import { EntityProvider } from "@/components/entityContext";

interface ChefsLayoutProps {
  children: React.ReactNode;
}

export default async function ChefsLayout({
  children,
}: ChefsLayoutProps) {

  const chefs = await fetchChefs();
  const chefsAsColumns = await Promise.all(chefs.map(convertChefToColumn));

  return (
    <EntityProvider<ChefColumn, Chef>
      data={chefsAsColumns}
    >
      <section>{children}</section>
    </EntityProvider>
  );
}

