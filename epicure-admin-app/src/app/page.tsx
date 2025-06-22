import StatsPanel from "@/components/stats-panel";
import { CardItem } from "@/types/interfaces/cardItem";
import { Store, Soup, ChefHat } from "lucide-react";

async function getItems(): Promise<CardItem[]> {
  const cards: CardItem[] = [
    {
      title: "Restaurants",
      content: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.",
      href: "/restaurants",
      count: 10,
      icon: Store,
    },
    {
      title: "Dishes",
      content: "From design elements to functionality, you have complete control to create a unique and personalized experience.",
      href: "/dishes",
      count: 15,
      icon: Soup,
    },
    {
      title: "Chefs",
      content: "Elements to functionality, you have complete control to create a unique experience.",
      href: "/chefs",
      count: 9,
      icon: ChefHat,
    },
  ]
  return cards;
}


export default async function Home() {
  const items = await getItems();

  return (
    <main>
      <div>
        <StatsPanel title="Epicure Admin Home" description="Epicure Admin Home" cards={items}/>
      </div>
    </main>
  );
}
