import Image from "next/image";
import styles from "@components/card/card.module.scss";
import { CardInfo } from "@/types/interfaces/cardInfo";
import { ILSIcon } from "@icons";

interface CardProps {
  card: CardInfo;
}

export default function Card({ card }: CardProps) {
  return (
    <div className={`${styles.cardContainer} ${styles[card.type]}`}>
      <Image
        src={card.imgUrl}
        placeholder="blur"
        alt={`${card.title} image`}
        sizes="100vw"
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <h2 className={styles.cardDescription}>{card.description}</h2>
      </div>
      {card.type === "dish" && (
        <div className={styles.bottomGroup}>
          {card.logoUrl && (
            <div className={styles.spicyIcon}>
              <Image
                src={card.logoUrl}
                width={30}
                height={24}
                alt="Spicy Icon"
              />
            </div>
          )}
          <div className={styles.cardPrice}>
            <div className={styles.ils}>
              <Image src={ILSIcon} width={7.26} height={6.67} alt="ILS Icon" />
            </div>
            <p>{card.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
