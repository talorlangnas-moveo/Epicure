"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./inputSearch.module.scss";
import Image from "next/image";
import { SearchIcon } from "@icons";
import clsx from "clsx";
import { debounce } from "@/utils/utils.functions";
import { getRestaurantsByName } from "@/services/restaurants/restaurants.api";
import { getChefsByName } from "@/services/chefs/chefs.api";
import { getDishesByName } from "@/services/dishes/dishes.api";
import { Restaurant } from "@/types/interfaces/restaurant";
import { Dish } from "@/types/interfaces/dish";
import { Chef } from "@/types/interfaces/chef";
import Link from "next/link";

interface InputSearchProps {
  variant?: "default" | "hero";
  setIsOpen?: (isOpen: boolean) => void;
  disableSearch?: boolean;
}

export default function InputSearch({ variant = "default", setIsOpen, disableSearch = false }: InputSearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const [restaurantsResults, setRestaurantsResults] = useState<Restaurant[]>(
    []
  );
  const [chefsResults, setChefsResults] = useState<Chef[]>([]);
  const [dishesResults, setDishesResults] = useState<Dish[]>([]);

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
    if (query && !disableSearch) {
      const fetchResults = async () => {
        const restaurants = await getRestaurantsByName(query);
        setRestaurantsResults(restaurants);
        const chefs = await getChefsByName(query);
        setChefsResults(chefs);
        const dishes = await getDishesByName(query);
        setDishesResults(dishes);

        console.log("restaurants:", restaurants);
        console.log("chefs:", chefs);
        console.log("dishes:", dishes);
      };
      fetchResults();
    } else {
      setRestaurantsResults([]);
      setChefsResults([]);
      setDishesResults([]);
    }

    return () => {
      clearDebouncedTerm();
    };
  }, [query, clearDebouncedTerm, disableSearch]);

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
          autoComplete="off"
        />
      </div>
      <div className={styles.resultsContainer}>
        {restaurantsResults.length > 0 && (
          <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>Restaurants:</h2>
            <ul className={styles.section}>
              {restaurantsResults.map((item) => (
                <li key={item._id} className={styles.linkDropdownItem}>
                  <Link
                    href={`/restaurants/${item._id}`}
                    onClick={() => setIsOpen && setIsOpen(false)}
                    className={styles.dropdownLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {chefsResults.length > 0 && (
          <>
           <hr className={styles.separator} />
          <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>Chefs:</h2>
            <ul className={styles.section}>
              {chefsResults.map((item) => (
                <li key={item._id} className={styles.dropdownItem}>
                  {item.firstName} {item.lastName}
                </li>
              ))}
            </ul>
          </div>
          </>
        )}
        {dishesResults.length > 0 && (
          <>
          <hr className={styles.separator} />
          <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>Dishes:</h2>
            <ul className={styles.section}>
              {dishesResults.map((item) => (
                <li key={item._id} className={styles.dropdownItem}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
