"use client";

import Image from "next/image";
import styles from "@components/card/card.module.scss";
import { CardInfo } from "@/types/interfaces/cardInfo";
import { ILSIcon } from "@icons";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface CardProps {
  card: CardInfo;
}

export default function Card({ card }: CardProps) {
  const width = useWindowWidth();

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
        {card.type !== "chef" && (
          <h2 className={styles.cardDescription}>{card.description}</h2>
        )}
        {card.type === "restaurant" &&
          width !== null &&
          width > 1023 &&
          card.ratingImage && (
            <Image
              src={card.ratingImage}
              alt="rating image"
              className={styles.ratingImage}
            />
          )}
        {card.type === "dish" && (
          <>
            {card.logoUrl && (
              <div className={styles.spicyIconWrapper}>
                <Image
                  src={card.logoUrl}
                  alt="Dish Icon"
                  className={styles.spicyIcon}
                />
              </div>
            )}
            {width !== null && width < 1023 && (
              <div className={styles.cardPriceWrapper}>
                <div className={styles.cardPrice}>
                  <div className={styles.ils}>
                    <Image
                      src={ILSIcon}
                      alt="ILS Icon"
                      className={styles.ilsImage}
                    />
                  </div>
                  <p className={styles.priceText}>{card.price}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {card.type === "dish" && width !== null && width > 1023 && (
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>
            <Image src={ILSIcon} alt="ILS Icon" className={styles.ilsImage} />
            <span className={styles.priceText}>{card.price}</span>
          </span>
        </div>
      )}
    </div>
  );
}
