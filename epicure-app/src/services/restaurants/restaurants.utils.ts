import { CardInfo } from "@/components/card/card";
import { CardType } from "@/types/cardType";
import { Restaurant } from "@/types/interfaces/restaurant";
import { getImageFromPublic } from "@/utils/image.utils";
import { getRatingImage } from "@/utils/rating.utils";

export async function convertRestaurantToCard(restaurant: Restaurant): Promise<CardInfo> {
    const imageData = await getImageFromPublic(restaurant.imgUrl);

    return {
      id: restaurant.id,
      type: 'restaurant' as CardType,
      title: restaurant.name,
      description: restaurant.description,
      imgUrl: imageData,
      rating: restaurant.rating,
      ratingImage: getRatingImage(restaurant.rating),
      route: restaurant.route,
    };
  }