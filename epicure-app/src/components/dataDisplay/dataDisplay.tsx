"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';
import styles from "./dataDisplay.module.scss";
import cardsStyles from "@components/card/card.module.scss";
import Card, { CardInfo } from "../card/card";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { DownArrow } from "@/icons";
import Link from "next/link";
import { FilterOption } from "@/types/interfaces/filterOption";

interface DisplayProps {
  dataAsCards: CardInfo[];
  filterOptions: FilterOption[];
  filterByRangeOptions?: FilterOption[];
  title?: string;
  className?: string;
}

export default function DataDisplay({
  dataAsCards,
  filterOptions,
  filterByRangeOptions,
  title = "Items",
  className,
}: DisplayProps) {
  const isDesktopView = useIsDesktopView();
  const [activeItem, setActiveItem] = useState("1");
  const [filteredData, setFilteredData] =
    useState<CardInfo[]>(dataAsCards);

  const handleFilter = async (
    filterFunction?: () => Promise<CardInfo[]>
  ) => {
    if (!filterFunction) {
    console.log("filteredData in !filterFunction before set: ",filteredData);
      setFilteredData(dataAsCards);
      console.log("filteredData in !filterFunction after set: ",filteredData);
      return;
    }
    const filtered = await filterFunction();
    console.log("filtered: ",filtered);
    console.log("filteredData before set: ",filteredData);
    setFilteredData(filtered);
    console.log("filteredData after set: ",filteredData);
  };

  return (
    <div className={styles.dataDisplayContainer}>
      <div className={styles.textContainer}>
        {!isDesktopView && <h1 className={styles.heading}>{title}</h1>}
        <div className={clsx(className ? styles[className] : styles.barContainer)}>
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
      {isDesktopView && filterByRangeOptions && (
        <div className={styles.filterContainer}>
          {filterByRangeOptions.map((option) => (
            <div key={option.id} className={styles.filterTabContainer}>
              <p className={styles.text}>{option.label}</p>
              <Image src={DownArrow} alt="Down Arrow" width={24} height={24} />
            </div>
          ))}
        </div>
      )}
      <div className={styles.cardsContainer}>
        {filteredData.map((item) => (
          item.route ? (
          <Link
            key={item.id}
            href={item.route}
            className={styles.linkStyle}
          >
            <Card
              {...item}
              className={clsx(cardsStyles.restaurant, styles.restaurantCard)}
            />
          </Link>
            ) : (
            <Card
              key={item.id}
              {...item}
              className={clsx(cardsStyles.restaurant, styles.restaurantCard)}
            />
          )
        ))}
      </div>
    </div>
  );
}
