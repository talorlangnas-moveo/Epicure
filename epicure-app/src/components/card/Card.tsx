"use client";

import Image, { StaticImageData } from "next/image";
import styles from "@components/card/card.module.scss";
import { ILSIcon } from "@icons";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { CardType } from "@/types/cardType";

export interface CardInfo {
  id: string;
  type?: CardType;
  title: string;
  description?: string;
  imgUrl: StaticImageData;
  rating?: number;
  ratingImage?: StaticImageData;
  price?: number;
  dishCategoryLogo?: StaticImageData;
}

export default function Card({
  type,
  title,
  description,
  imgUrl,
  ratingImage,
  price,
  dishCategoryLogo,
}: CardInfo) {
  const isDesktop = useIsDesktopView();

  return (
    <div className={`${styles.cardContainer} ${styles[type || "dish"]}`}>
      <Image
        src={imgUrl}
        // width={245}
        // height={152}
        // placeholder="blur"
        alt={`${title} image`}
        sizes="100vw"
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <h2 className={styles.cardDescription}>{description}</h2>
        )}
        {ratingImage && isDesktop && (
          <Image
            src={ratingImage}
            alt="rating image"
            className={styles.ratingImage}
          />
        )}
        {dishCategoryLogo && (
          <div className={styles.spicyIconWrapper}>
            <Image src={dishCategoryLogo} alt="Dish Icon" className={styles.spicyIcon} />
          </div>
        )}
      </div>
      {price &&
        (isDesktop ? (
          <div className={styles.cardFooter}>
            <span className={styles.cardPrice}>
              <Image src={ILSIcon} alt="ILS Icon" className={styles.ilsImage} />
              <span className={styles.priceText}>{price}</span>
            </span>
          </div>
        ) : (
          <div className={styles.cardPriceWrapper}>
            <div className={styles.cardPrice}>
              <div className={styles.ils}>
                <Image
                  src={ILSIcon}
                  alt="ILS Icon"
                  className={styles.ilsImage}
                />
              </div>
              <p className={styles.priceText}>{price}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
