import { fetchRestaurants, fetchRestaurantsAsCards } from "@/utils/fetchCards";
import DataDisplay from "@components/dataDisplay/dataDisplay";
import { Restaurant } from "@/types/interfaces/restaurant";
import { filterOptions } from "@/utils/filterFunctions";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await fetchRestaurantsAsCards();

  return (
    <DataDisplay<Restaurant>
      data={restaurants}
      dataAsCards={restaurantsAsCards}
      filterOptions={filterOptions}
      title="Restaurants"
    />
  );
}

export default Restaurants;
