import Image from "next/image";
import { Restaurant } from "@interfaces/Restaurant";
import styles from '@components/cards/restaurant/card.module.scss';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const responsiveImage = {
    width: "100%",
    height: "auto",
};

export default function Card({ restaurant }: RestaurantCardProps) {
  return (
    <div className={styles["card-container"]}>
      <Image
        src={restaurant.imgUrl || "/images/restaurant.jpg"}
        alt={`Restaurant ${restaurant.name} image`}
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }}
        style={responsiveImage}
      />
      <h3>{restaurant.name}</h3>
      <h2>{restaurant.chef}</h2>
    </div>
  );
}
