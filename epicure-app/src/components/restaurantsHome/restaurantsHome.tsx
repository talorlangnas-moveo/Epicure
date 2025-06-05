import Card, { CardInfo } from "../card/card";
import { Restaurant } from "@/types/interfaces/Restaurant";
import styles from "./restaurantsHome.module.scss";

interface RestaurantsHomeProps {
  restaurants: Restaurant[];
  restaurantsAsCards: CardInfo[];
}

export default function RestaurantsHome({
  restaurantsAsCards,
}: RestaurantsHomeProps) {
  console.log(restaurantsAsCards);
  return (
    <div className={styles.restaurantsHomeContainer}>
        <h1 className={styles.heading}>Restaurants</h1>
        <div className={styles.barContainer}>
          <p className={styles.text}>All</p>
          <p className={styles.text}>New</p>
          <p className={styles.text}>Most Popular</p>
          <p className={styles.text}>Open Now</p>
        </div>
      <div className={styles.cardsContainer}>
                {restaurantsAsCards.map((restaurant) => (
                    <Card key={restaurant.id} {...restaurant} />
                ))}
            </div>
    </div>
  );
}
