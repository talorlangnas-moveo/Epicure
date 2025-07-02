import Hero from "@/components/hero/hero";
import IconLegend from "@/components/iconLegend/iconLegend";
import ChefCard from "@/components/chefCard/chefCard";
import InfoPanel from "@/components/infoPanel/infoPanel";
import Carousel from "@components/carousel/carousel";
import Card from "@/components/card/card";
import CardsDisplay from "@components/cardsDisplay/cardsDisplay";
import AboutUs from "@components/aboutUs/aboutUs";
import { fetchAll } from "@/services/dishes/dishes.api";
import { getDishesAsCards } from "@/services/dishes/dishes.utils";
import { fetchRestaurants, fetchRestaurantsByChefId } from "@/services/restaurants/restaurants.api";
import { getRestaurantsAsCards } from "@/services/restaurants/restaurants.utils";
import { CHEF_OF_THE_WEEK_ID } from "@/utils/constants";
import { fetchChefById } from "@/services/chefs/chefs.api";

export default async function Home() {
  const restaurants = await fetchRestaurants();
  const restaurantsCards = await getRestaurantsAsCards(restaurants);
  const dishes = await fetchAll();
  const dishCards = await getDishesAsCards(dishes);

  const chefOfTheWeek = await fetchChefById(CHEF_OF_THE_WEEK_ID);
  const chefRestaurants = await fetchRestaurantsByChefId(CHEF_OF_THE_WEEK_ID);
  const chefRestaurantsAsCards = await getRestaurantsAsCards(chefRestaurants);

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
      <ChefCard chef={chefOfTheWeek}>
        <InfoPanel
          title="Yossi’s Restaurants"
          type="chef"
          displayButtonDesktop={false}
          childrenDesk={
            <CardsDisplay cards={chefRestaurantsAsCards} type="chef" />
          }
        >
          <Carousel>
            {chefRestaurantsAsCards.map((c) => (
              <Card key={c.id} {...c} className="chef" />
            ))}
          </Carousel>
        </InfoPanel>
      </ChefCard>
      <AboutUs />
    </div>
  );
}
