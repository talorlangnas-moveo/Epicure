"use client";

import Image from "next/image";
import { useState } from "react";
import { Restaurant } from "@/types/interfaces/restaurant";
import { filterDishTypesOptions } from "@/utils/filterFunctions";
import styles from "./dishesDisplay.module.scss";
import clsx from "clsx";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { useIsOpen } from "@/hooks/useIsOpen";
import { ClockIcon } from "@/icons";
import Card, { CardInfo } from "@components/card/card";
import cardsStyles from "@components/card/card.module.scss";
import DishOrderCard from "@components/dishOrderCard/dishOrderCard";
import Footer from "@components/footer/footer";

interface DishesDisplayProps {
  restaurant: Restaurant;
  dishCards: CardInfo[];
}

export default function DishesDisplay({
  restaurant,
  dishCards,
}: DishesDisplayProps) {
  const isDesktopView = useIsDesktopView();
  const isOpen = useIsOpen(restaurant.openingTime, restaurant.closingTime);
  const [activeItem, setActiveItem] = useState("1");
  const [selectedDish, setSelectedDish] = useState<CardInfo | null>(null);

  const handleDishClick = (dishCard: CardInfo) => {
    setSelectedDish(dishCard);
  };

  const handleCloseOrderCard = () => {
    setSelectedDish(null);
  };

  return (
    <div>
      {selectedDish ? (
        <DishOrderCard 
          dishCard={selectedDish} 
          onClose={handleCloseOrderCard}
        >
          <Footer />
          </DishOrderCard>
      ) : (
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
          {dishCards && (
            <div className={styles.cardsContainer}>
              {dishCards.map((dishCard) => (
                <div key={dishCard.id} onClick={() => handleDishClick(dishCard)} className={styles.dishCardContainer}>
                  <Card
                    {...dishCard}
                    className={clsx(cardsStyles.dishMenu, styles.dishCard)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
