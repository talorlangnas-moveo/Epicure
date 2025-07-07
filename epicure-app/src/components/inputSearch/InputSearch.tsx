"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./inputSearch.module.scss";
import Image from "next/image";
import { SearchIcon } from "@icons";
import clsx from "clsx";
import { debounce } from "@/utils/utils.functions";
import Card, { CardInfo } from "@components/card/card";

import { getRestaurantsByName } from "@/services/restaurants/restaurants.api";
import { getRestaurantsAsCards } from "@/services/restaurants/restaurants.utils";

import { getChefsByName } from "@/services/chefs/chefs.api";
import { convertChefToCard } from "@/services/chefs/chefs.utils";

import { getDishesByName } from "@/services/dishes/dishes.api";
import { getDishesAsCards } from "@/services/dishes/dishes.utils";

interface InputSearchProps {
  variant?: "default" | "hero";
}

export default function InputSearch({ variant = "default" }: InputSearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<CardInfo[]>([]);

  const [debouncedSetTerm, clearDebouncedTerm] = useMemo(
    () => debounce((value: unknown) => setQuery(value as string), 1000),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSetTerm(value);
  };

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        const restaurants = await getRestaurantsByName(query);
        const chefs = await getChefsByName(query);
        const dishes = await getDishesByName(query);

        const restaurantsCards = await getRestaurantsAsCards(restaurants);
        const chefsCards = await Promise.all(chefs.map(convertChefToCard));
        const dishesCards = await getDishesAsCards(dishes);

        setResults([...restaurantsCards, ...chefsCards, ...dishesCards]);
      };
      fetchResults();
    } else {
      setResults([]);
    }

    return () => {
      clearDebouncedTerm();
    };
  }, [query, clearDebouncedTerm]);

  return (
    <div className={styles.inputSearchContainer}>
      <div
        className={clsx(
          styles.inputSearch,
          variant === "hero"
            ? styles.inputSearchHero
            : styles.inputSearchDefault
        )}
      >
        <div className={styles.searchIcon}>
          <Image
            src={SearchIcon}
            alt="Search Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <input
          className={styles.inputContainer}
          id="search-input"
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      
      {results.length > 0 && (
      <div className={clsx(styles.cardsContainer,
        variant === "hero"
        ? styles.cardsContainerHero
        : styles.cardsContainerDefault
      )}>
        {results.map((result) => (
          <Card key={result.id} {...result} className="searchCard" />
        ))}
      </div>
      )}
    </div>
  );
}
