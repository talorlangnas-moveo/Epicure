import Image from "next/image";
import styles from "./popular.module.scss";
import Carousel from "@/components/carousel/carousel";
import Card from "@/components/card/card";
import { restaurantsCards } from "@/data/restaurantsCards";
import { ArrowsIcon } from "@icons/index";
import { CardType, getTitle } from "@/types/cardType";

interface PopularRestaurantsProps {
  title?: string;
  type?: CardType;
}

export default function PopularRestaurants({ type, title }: PopularRestaurantsProps) {
  return (
    <div className={styles.popularRestaurants}>
      {/* <h4>popular restaurant in epicure:</h4> */}
      <h4>
        {title !== undefined
          ? title
          : getTitle(type) || ""}
      </h4>
      <Carousel>
        {restaurantsCards.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </Carousel>
      <div className={styles.allRestaurants}>
        <p>All restaurants</p>
        <Image src={ArrowsIcon} width={24} height={24} alt="Arrows Icon" />
      </div>
    </div>
  );
}
