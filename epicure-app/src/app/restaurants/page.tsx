import { fetchRestaurants, fetchRestaurantsAsCards } from "@/utils/fetchCards";
import RestaurantsDisplay from "@/components/restaurantsDisplay/restaurantsDisplay";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await fetchRestaurantsAsCards();
  
  return (
    <RestaurantsDisplay
      restaurants={restaurants}
      restaurantsAsCards={restaurantsAsCards}
    />
  );
}

export default Restaurants;
