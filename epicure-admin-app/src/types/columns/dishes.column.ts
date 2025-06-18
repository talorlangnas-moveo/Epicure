export type DishColumn = {
    _id: string;
    restaurantId: string;
    name: string;
    description: string;
    image: string;
    price: number;
    dishCategory?: string;
    chefName?: string;
    restaurantName?: string;
}