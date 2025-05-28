import Image from "next/image";
import styles from "./popular.module.scss";
import Carousel from '@/components/carousel/carousel';
import Card from "@/components/card/card";
import { ArrowsIcon } from "@icons";
import { CardType, getTitle } from "@/types/cardType";
import { CardInfo } from '@interfaces/CardInfo';

interface PopularRestaurantsProps {
  cards: CardInfo[];
  title?: string;
  type?: CardType;
}

export default function PopularRestaurants({ cards, type, title }: PopularRestaurantsProps) {
  return (
    <div className={styles.popularRestaurants}>
      <h4>
        {title !== undefined
          ? `${title}'S  RESTAURANTS`
          : getTitle(type) || ""}
      </h4>
      <Carousel>
        {cards.map((c) => (
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
