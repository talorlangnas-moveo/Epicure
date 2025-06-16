import { fetchRestaurants } from '@/services/restaurants/restaurants.api';
import { getRestaurantsAsCards } from '@/services/restaurants/restaurants.utils';
import DataDisplay from "@components/dataDisplay/dataDisplay";
import { Restaurant } from "@/types/interfaces/restaurant_tmp";
import { restaurantsFilterOptions, filterByRangeOptions } from "@/services/restaurants/restaurantsFilterFunctions";

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  const restaurantsAsCards = await getRestaurantsAsCards(restaurants);

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
