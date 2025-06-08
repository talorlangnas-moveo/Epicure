"use client";

import Image from "next/image";
import { useState } from "react";
import { Restaurant } from "@/types/interfaces/restaurant";
import { filterDishTypesOptions } from "@/utils/fillterFunctions";
import styles from "./restaurantHomePage.module.scss";
import clsx from "clsx";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { useIsOpen } from "@/hooks/useIsOpen";
import { ClockIcon } from "@/icons";
import Card from "@components/card/card";
import cardsStyles from "@components/card/card.module.scss";

interface RestaurantHomePageProps {
  restaurant: Restaurant;
}

export default function RestaurantHomePage({
  restaurant,
}: RestaurantHomePageProps) {
  const isDesktopView = useIsDesktopView();
  const isOpen = useIsOpen(restaurant.openingTime, restaurant.closingTime);
  const [activeItem, setActiveItem] = useState("All");
  console.log(restaurant.dishes);
  return (
    <div className={styles.restaurantHomePage}>
      <Image
        src={
          isDesktopView
            ? restaurant.homePageImgUrlDesktop || restaurant.imgUrl
            : restaurant.homePageImgUrlMobile || restaurant.imgUrl
        }
        alt={restaurant.title}
        sizes="100vw"
        className={styles.restaurantImage}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{restaurant.title}</h1>
        <p className={styles.description}>{restaurant.description}</p>
        <div className={styles.openingHours}>
          <Image
            src={ClockIcon}
            alt="Clock Icon"
            className={styles.clockIcon}
          />
          <p>{isOpen ? "Open Now" : "Closed"}</p>
        </div>
        <div className={styles.barContainer}>
          {filterDishTypesOptions.map((option) => {
            if (option.desktopOnly && !isDesktopView) return null;
            return (
              <p
                key={option.id}
                className={clsx(
                  styles.textBarItem,
                  activeItem === option.id && styles.active
                )}
                onClick={() => {
                  setActiveItem(option.id);
                }}
              >
                {option.label}
              </p>
            );
          })}
        </div>
      </div>
      {restaurant.dishes && (
        <div className={styles.cardsContainer}>
          {restaurant.dishes.map((dish) => (
          <Card
            key={dish.id}
            {...dish}
            className={clsx(cardsStyles.dishMenu, styles.dishCard)}
          />
        ))}
        </div>
      )}
    </div>
  );
}
