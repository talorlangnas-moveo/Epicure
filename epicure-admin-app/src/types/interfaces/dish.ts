export type DishCategoryType = 'spicy' | 'vegetarian' | 'vegan';

export interface Dish {
    _id: string;
    restaurantId: string;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
    dishCategory?: DishCategoryType;
}