"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';
import styles from "./dataDisplay_tmp.module.scss";
import cardsStyles from "@components/card/card.module.scss";
import Card, { CardInfo } from "../card/card";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { DownArrow } from "@/icons";
import { filterByRangeOptions } from "@/utils/filterFunctions";
import Link from "next/link";
import { FilterOption } from "@/types/interfaces/filterOption";

interface DisplayProps<T> {
  data: T[];
  dataAsCards: CardInfo[];
  filterOptions: FilterOption[];
  title?: string;
}

export default function DataDisplay<T>({
  data,
  dataAsCards,
  filterOptions,
  title = "Items",
}: DisplayProps<T>) {
  
  const isDesktopView = useIsDesktopView();
  const [activeItem, setActiveItem] = useState("1");
  const [filteredData, setFilteredData] =
    useState<CardInfo[]>(dataAsCards);

  const handleFilter = (
    filterFunction?: (data: T[]) => CardInfo[]
  ) => {
    if (!filterFunction) {
      setFilteredData(dataAsCards);
      return;
    }
    const filtered = filterFunction(data);
    setFilteredData(filtered);
  };

  return (
    <div className={styles.restaurantsHomeContainer}>
      <div className={styles.textContainer}>
        {!isDesktopView && <h1 className={styles.heading}>{title}</h1>}
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
          <Link
            key={item.id}
            href={`/${title.toLowerCase()}/${item.id}`}
            className={styles.linkStyle}
          >
            <Card
              {...item}
              className={clsx(cardsStyles.restaurant, styles.restaurantCard)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
