export type DishCategoryType = 'spicy' | 'vegetarian' | 'vegan' | 'none';

export interface Dish {
    _id: string;
    restaurantId: string;
    name: string;
    description: string;
    imgUrl: string;
    price: string;
    dishCategory?: DishCategoryType;
}