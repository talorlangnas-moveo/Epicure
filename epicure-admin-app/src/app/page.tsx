import StatsPanel from "@/components/stats-panel";
import { cards, getCollectionsCount } from "@services/adminStats/adminStats.utils";

export default async function Home() {
  const [restaurantsCount, dishesCount, chefsCount] = await getCollectionsCount();
  const updatedCards = cards.map((card, index) => ({
    ...card,
    count: [restaurantsCount, dishesCount, chefsCount][index],
  }));

  return (
    <main>
      <div>
        <StatsPanel title="Epicure Admin Home" description="Epicure Admin Home" cards={updatedCards}/>
      </div>
    </main>
  );
}
