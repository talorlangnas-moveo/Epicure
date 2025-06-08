"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';
import styles from "./restaurantsHome.module.scss";
import cardsStyles from "@components/card/card.module.scss";
import Card, { CardInfo } from "../card/card";
import { Restaurant } from "@interfaces/restaurant";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { DownArrow } from "@/icons";
import { filterOptions } from "@/utils/fillterFunctions";
import Link from "next/link";

interface RestaurantsHomeProps {
  restaurants: Restaurant[];
  restaurantsAsCards: CardInfo[];
}

export default function RestaurantsHome({
  restaurants,
  restaurantsAsCards,
}: RestaurantsHomeProps) {
  const isDesktopView = useIsDesktopView();
  const [activeItem, setActiveItem] = useState("All");
  const [filteredRestaurants, setFillteredRestaurants] =
    useState<CardInfo[]>(restaurantsAsCards);

  const handleFilter = (
    filterFunction?: (restaurants: Restaurant[]) => CardInfo[]
  ) => {
    if (!filterFunction) {
      setFillteredRestaurants(restaurantsAsCards);
      return;
    }
    const filtered = filterFunction(restaurants);
    setFillteredRestaurants(filtered);
  };

  return (
    <div className={styles.restaurantsHomeContainer}>
      <div className={styles.textContainer}>
        {!isDesktopView && <h1 className={styles.heading}>Restaurants</h1>}
        <div className={styles.barContainer}>
          {filterOptions.map((option) => {
            if (option.desktopOnly && !isDesktopView) return null;
            return (
              <p
                key={option.id}
                className={clsx(styles.textBarItem, activeItem === option.id && styles.active)}
                onClick={() => {
                  setActiveItem(option.id);
                  handleFilter(option.filterFn);
                }}
              >
                {option.label}
              </p>
            );
          })}
        </div>
      </div>
      {isDesktopView && (
        <div className={styles.filterContainer}>
          {filterOptions.slice(5, 8).map((option) => (
            <div key={option.id} className={styles.filterTabContainer}>
              <p className={styles.text}>{option.label}</p>
              <Image src={DownArrow} alt="Down Arrow" width={24} height={24} />
            </div>
          ))}
        </div>
      )}
      <div className={styles.cardsContainer}>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={`/restaurants/${restaurant.slug}?id=${restaurant.id}`}
            className={styles.linkStyle}
          >
            <Card
              {...restaurant}
              className={clsx(cardsStyles.restaurant, styles.restaurantCard)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
