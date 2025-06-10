"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "@components/card/card.module.scss";
import { ILSIcon } from "@icons";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { CardType } from "@/types/cardType";

export interface CardInfo {
  id: string;
  type?: CardType;
  title?: string;
  slug?: string;
  description?: string;
  imgUrl: StaticImageData;
  rating?: number;
  ratingImage?: StaticImageData;
  price?: number;
  dishCategoryLogo?: StaticImageData;
  showDishCategoryLogo?: boolean;
  className?: string;
  route?: string;
}

export default function Card({
  title,
  description,
  imgUrl,
  ratingImage,
  price,
  dishCategoryLogo,
  showDishCategoryLogo = true,
  className,
}: CardInfo) {
  const isDesktop = useIsDesktopView();

  return (
    <div
      className={clsx(
        styles.cardContainer,
        className && (styles[className] || className)
      )}
    >
      <Image
        src={imgUrl}
        placeholder="blur"
        alt={`${title} image`}
        sizes="100vw"
        className={styles.cardImage}
      />
      {(title ||
        description ||
        price ||
        ratingImage) && (
          <div className={styles.cardContent}>
            {title && <h3 className={styles.cardTitle}>{title}</h3>}
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
            {dishCategoryLogo && showDishCategoryLogo && (
              <div className={styles.spicyIconWrapper}>
                <Image
                  src={dishCategoryLogo}
                  alt="Dish Icon"
                  className={styles.spicyIcon}
                />
              </div>
            )}
          </div>
        )}
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
            <span className={styles.cardPrice}>
              <span className={styles.ils}>
                <Image
                  src={ILSIcon}
                  alt="ILS Icon"
                  className={styles.ilsImage}
                />
              </span>
              <span className={styles.priceText}>{price}</span>
            </span>
          </div>
        ))}
    </div>
  );
}
