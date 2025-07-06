import Image from "next/image";
import { CardInfo } from "@components/card/card";
import styles from "./orderCard.module.scss";
import { ILSIcon } from "@/icons";
import { API_BASE_URL } from "@/utils/constants";

interface DishOrderCardProps {
  dishCard: CardInfo;
  isDesktop: boolean;
}

export default function DishOrderCard({ dishCard, isDesktop }: DishOrderCardProps) {
  return (
    <div className={styles.dishOrderCard}>
      <div className={styles.dishImageContainer}>
      <Image
        src={`${API_BASE_URL}/${dishCard.imgUrl}`}
        alt={`${dishCard.title} image`}
        fill
      />
      </div>
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
