import Hero from "@/components/hero/hero";
import IconLegend from "@/components/iconLegend/iconLegend";
import { chefInfo } from "@/data/chefInfo";
import ChefCard from "@/components/chefCard/chefCard";
import InfoPanel from "@/components/infoPanel/infoPanel";
import Carousel from "@components/carousel/carousel";
import Card from "@/components/card/card";
import CardsDisplay from "@components/cardsDisplay/cardsDisplay";
import AboutUs from "@components/aboutUs/aboutUs";
import { fetchChefRestCards } from "@/utils/fetchCards";
import { fetchAll } from "@/services/dishes/dishes.api";
import { getDishesAsCards } from "@/services/dishes/dishes.utils";
import { fetchRestaurants } from "@/services/restaurants/restaurants.api";
import { getRestaurantsAsCards } from "@/services/restaurants/restaurants.utils";

export default async function Home() {
  const restaurants = await fetchRestaurants();
  const restaurantsCards = await getRestaurantsAsCards(restaurants);
  const dishes = await fetchAll();
  const dishCards = await getDishesAsCards(dishes);
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
            <Card key={c.id} {...c} className="restaurant" />
          ))}
        </Carousel>
      </InfoPanel>
      <InfoPanel
        title="Signature Dish Of:"
        type="dish"
        displayButtonDesktop={false}
        childrenDesk={<CardsDisplay cards={dishCards} type="dish" />}
      >
        <Carousel>
          {dishCards.map((c) => (
            <Card key={c.id} {...c} className="dish" />
          ))}
        </Carousel>
      </InfoPanel>

      <IconLegend />
      <ChefCard chef={chefInfo}>
        <InfoPanel
          title="Yossi’s Restaurants"
          type="chef"
          displayButtonDesktop={false}
          childrenDesk={
            <CardsDisplay cards={chefRestaurantsCards} type="chef" />
          }
        >
          <Carousel>
            {chefRestaurantsCards.map((c) => (
              <Card key={c.id} {...c} className="chef" />
            ))}
          </Carousel>
        </InfoPanel>
      </ChefCard>
      <AboutUs />
    </div>
  );
}
