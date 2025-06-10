import Image from "next/image";
import { CardInfo } from "@components/card/card";
import styles from "./orderCard.module.scss";
import { ILSIcon } from "@/icons";

interface DishOrderCardProps {
  dishCard: CardInfo;
  isDesktop: boolean;
}

export default function DishOrderCard({ dishCard, isDesktop }: DishOrderCardProps) {
  return (
    <div className={styles.dishOrderCard}>
      <Image
        src={dishCard.imgUrl}
        alt={dishCard.title}
        className={styles.dishImage}
      />
      <div className={styles.container}>
        <div className={styles.dishInfo}>
          <h1 className={styles.dishTitle}>{dishCard.title}</h1>
          <p className={styles.dishDescription}>{dishCard.description}</p>
          {isDesktop && dishCard.dishCategoryLogo && (
            <Image
            src={dishCard.dishCategoryLogo}
            alt="Dish Icon"
            className={styles.logo}
          />
          )}
          {dishCard.price && isDesktop &&
          (
            <div className={styles.cardFooter}>
              <span className={styles.cardPrice}>
              <span className={styles.ils}>
                <Image
                  src={ILSIcon}
                  alt="ILS Icon"
                  className={styles.ilsImage}
                />
                </span>
                <span className={styles.priceText}>{dishCard.price}</span>
              </span>
            </div>)}
        </div>
      </div>
    </div>
  );
}
