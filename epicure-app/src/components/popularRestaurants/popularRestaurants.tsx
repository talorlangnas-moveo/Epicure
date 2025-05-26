import styles from "./popular.module.scss";
import Carousel from "@components/carousel/carousel";
import Card from "@/components/card/card";
import { restaurantsCards } from "@/data/restaurantsCards";

export default function PopularRestaurants() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.popularRestaurants}>
        <h4>popular restaurant in epicure:</h4>
        <Carousel>
          {restaurantsCards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </Carousel>
        <p>All restaurants</p>
      </div>
      <div className={styles.popularRestaurants}>
        <h4>Signature Dish Of:</h4>
        <Carousel>
          {restaurantsCards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </Carousel>
        <p>All restaurants</p>
      </div>
    </div>
  );
}
