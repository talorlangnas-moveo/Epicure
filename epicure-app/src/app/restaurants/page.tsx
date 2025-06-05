import { fetchRestaurants, fetchRestaurantsAsCards } from "@/utils/fetchCards";
import RestaurantsHome from "@components/restaurantsHome/restaurantsHome";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await fetchRestaurantsAsCards();
  
  return (
    <RestaurantsHome
      restaurants={restaurants}
      restaurantsAsCards={restaurantsAsCards}
    />
  );
}

export default Restaurants;
