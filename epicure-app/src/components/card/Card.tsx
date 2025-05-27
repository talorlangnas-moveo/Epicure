import Image from "next/image";
import styles from "@components/card/card.module.scss";
import { CardInfo } from "@/types/interfaces/CardInfo";

interface CardProps {
  card: CardInfo;
}

export default function Card({ card }: CardProps) {
  return (
    <div className={`${styles.cardContainer} ${styles[card.type]}`}>
      <Image
        className={styles.cardImage}
        src={card.imgUrl}
        placeholder="blur"
        alt={`${card.title} image`}
        sizes="100vw"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <h2 className={styles.cardDescription}>{card.description}</h2>
      </div>
    </div>
  );
}
