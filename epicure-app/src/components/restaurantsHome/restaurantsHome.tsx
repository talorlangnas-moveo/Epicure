"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./restaurantsHome.module.scss";
import Card, { CardInfo } from "../card/card";
import { Restaurant } from "@/types/interfaces/Restaurant";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { DownArrow } from "@/icons";
import {
  getNewestRestaurantsAsCards,
  getMostPopularRestaurantsAsCards,
  getOpenRestaurantsAsCards,
} from "@/utils/fillterFunctions";

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
  const [fillteredRestaurants, setFillteredRestaurants] =
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
          <p
            className={`${styles.textBarItem} ${
              activeItem === "All" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem("All");
              handleFilter();
            }}
          >
            All
          </p>
          <p
            className={`${styles.textBarItem} ${
              activeItem === "New" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem("New");
              handleFilter(getNewestRestaurantsAsCards);
            }}
          >
            New
          </p>
          <p
            className={`${styles.textBarItem} ${
              activeItem === "Most Popular" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem("Most Popular");
              handleFilter(getMostPopularRestaurantsAsCards);
            }}
          >
            Most Popular
          </p>
          <p
            className={`${styles.textBarItem} ${
              activeItem === "Open Now" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem("Open Now");
              handleFilter(getOpenRestaurantsAsCards);
            }}
          >
            Open Now
          </p>
          {isDesktopView && (
            <p
              className={`${styles.textBarItem} ${
                activeItem === "Map View" ? styles.active : ""
              }`}
              onClick={() => setActiveItem("Map View")}
            >
              Map View
            </p>
          )}
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
        {fillteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            {...restaurant}
            className={styles.restaurantCard}
          />
        ))}
      </div>
    </div>
  );
}
