import { fetchRestaurants, fetchRestaurantsAsCards } from "@/utils/fetchCards";
import DataDisplay from "@components/dataDisplay/dataDisplay";
import { Restaurant } from "@/types/interfaces/restaurant";
import { restaurantsFilterOptions, filterByRangeOptions } from "@/utils/restaurantsFilterFunctions";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await fetchRestaurantsAsCards();

  return (
    <DataDisplay<Restaurant>
      data={restaurants}
      dataAsCards={restaurantsAsCards}
      filterOptions={restaurantsFilterOptions}
      filterByRangeOptions={filterByRangeOptions}
      title="Restaurants"
    />
  );
}

export default Restaurants;
