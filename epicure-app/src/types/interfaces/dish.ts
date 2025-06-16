export interface Dish {
    _id: string;
    restaurantId: string;
    title: string;
    description: string;
    imgUrl: string;
    price: number;
    dishCategory?: string;
}