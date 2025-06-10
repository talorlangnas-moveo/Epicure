import { fetchRestaurants, fetchRestaurantsAsCards } from "@/utils/fetchCards";
// import RestaurantsDisplay from "@/components/restaurantsDisplay/restaurantsDisplay";
import DataDisplay from "@/components/restaurantsDisplay/restaurantsDisplay";
import { Restaurant } from "@/types/interfaces/restaurant";
import { filterOptions } from "@/utils/filterFunctions";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await fetchRestaurantsAsCards();

  return (
    // <RestaurantsDisplay
    //   restaurants={restaurants}
    //   restaurantsAsCards={restaurantsAsCards}
    // />
    <DataDisplay<Restaurant>
      data={restaurants}
      dataAsCards={restaurantsAsCards}
      filterOptions={filterOptions}
      title="Restaurants"
    />
  );
}

export default Restaurants;
