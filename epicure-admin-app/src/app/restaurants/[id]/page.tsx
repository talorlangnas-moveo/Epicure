import { fetchRestaurantById } from "@/services/restaurants/restaurants.api";
import RestaurantsForm from "@/components/restaurant-form";

interface EditRestaurantPageProps {
    params: {
        id: string;
    }
}

export default async function EditRestaurantPage({ params }: EditRestaurantPageProps) {
    const restaurant = await fetchRestaurantById(params.id);

    return (
        <div>
           <RestaurantsForm restaurant={restaurant} />
        </div>
    )
}