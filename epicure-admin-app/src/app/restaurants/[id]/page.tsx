import { fetchRestaurantById } from "@/services/restaurants/restaurants.api";
import RestaurantsForm from "@/components/restaurant-form";
import { convertRestaurantToColumn } from "@/services/restaurants/restaurants.utils";

interface EditRestaurantPageProps {
    params: {
        id: string;
    }
}

export default async function EditRestaurantPage({ params }: EditRestaurantPageProps) {
    const restaurant = await fetchRestaurantById(params.id);
    const restaurantAsColumn = await convertRestaurantToColumn(restaurant);

    return (
        <div>
           <RestaurantsForm restaurant={restaurantAsColumn} mode="update" />
        </div>
    )
}