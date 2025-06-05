"use client";

import Image from "next/image";
import Card, { CardInfo } from "../card/card";
import { Restaurant } from "@/types/interfaces/Restaurant";
import styles from "./restaurantsHome.module.scss";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { DownArrow } from "@/icons";

interface RestaurantsHomeProps {
  restaurants: Restaurant[];
  restaurantsAsCards: CardInfo[];
}

export default function RestaurantsHome({
  restaurantsAsCards,
}: RestaurantsHomeProps) {
  
  const isDesktopView = useIsDesktopView();

  return (
    <div className={styles.restaurantsHomeContainer}>
      <div className={styles.textContainer}>
        {!isDesktopView && <h1 className={styles.heading}>Restaurants</h1>}
        <div className={styles.barContainer}>
          <p className={styles.text}>All</p>
          <p className={styles.text}>New</p>
          <p className={styles.text}>Most Popular</p>
          <p className={styles.text}>Open Now</p>
          {isDesktopView && <p className={styles.text}>Map View</p>}
        </div>
      </div>
      {isDesktopView && (
        <div className={styles.filterContainer}>
          <div className={styles.filterTabContainer}>
            <p className={styles.text}>Price Range</p>
            <Image src={DownArrow} alt="Down Arrow" width={24} height={24} />
          </div>
          <div className={styles.filterTabContainer}>
            <p className={styles.text}>Distance</p>
            <Image src={DownArrow} alt="Down Arrow" width={24} height={24} />
          </div>
          <div className={styles.filterContainer}>
            <p className={styles.text}>Rating</p>
            <Image src={DownArrow} alt="Down Arrow" width={24} height={24} />
          </div>
        </div>
      )}
      <div className={styles.cardsContainer}>
        {restaurantsAsCards.map((restaurant) => (
          <Card key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
