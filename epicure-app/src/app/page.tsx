import Hero from "@/components/hero/hero";
import IconLegend from "@/components/iconLegend/iconLegend";
import { chefInfo } from "@/data/chefInfo";
import ChefCard from "@/components/chefCard/chefCard";
import InfoPanel from "@/components/infoPanel/infoPanel";
import Carousel from "@components/carousel/carousel";
import Card from "@/components/card/card";
import CardsDisplay from "@components/cardsDisplay/cardsDisplay";
import AboutUs from "@components/aboutUs/aboutUs";
import { fetchRestaurantCards, fetchDishCards, fetchChefRestCards } from "@/utils/fetchCards";

export default async function Home() {

  const restaurantsCards = await fetchRestaurantCards();
  const dishCards = await fetchDishCards();
  const chefRestaurantsCards = await fetchChefRestCards();

  return (
    <div>
      <Hero />
      <InfoPanel
        title="Popular restaurant in Epicure:"
        type="restaurant"
        childrenDesk={
          <CardsDisplay cards={restaurantsCards} type="restaurant" />
        }
      >
        <Carousel>
          {restaurantsCards.map((c) => (
            <Card key={c.id} {...c} />
          ))}
        </Carousel>
      </InfoPanel>
      <InfoPanel
        title="Signature Dish Of:"
        type="dish"
        childrenDesk={<CardsDisplay cards={dishCards} type="dish" />}
      >
        <Carousel>
          {dishCards.map((c) => (
            <Card key={c.id} {...c} />
          ))}
        </Carousel>
      </InfoPanel>

      <IconLegend />
      <ChefCard chef={chefInfo}>
        <InfoPanel
          title="Yossi’s Restaurants"
          type="chef"
          displayButton={false}
          childrenDesk={
            <CardsDisplay cards={chefRestaurantsCards} type="chef" />
          }
        >
          <Carousel>
            {chefRestaurantsCards.map((c) => (
              <Card key={c.id} {...c} />
            ))}
          </Carousel>
        </InfoPanel>
      </ChefCard>
      <AboutUs />
    </div>
  );
}
