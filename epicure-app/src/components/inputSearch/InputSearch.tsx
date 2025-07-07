"use client";

import styles from "./inputSearch.module.scss";
import Image from "next/image";
import { SearchIcon } from "@icons";
import clsx from "clsx";

// export function debounce(func: Function, delay: number) {
//   let timeout: NodeJS.Timeout;
//   return function (...args: any[]) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), delay);
//   };
// }

interface InputSearchProps {
  variant?: "default" | "hero";
}

export default function InputSearch({ variant = "default" }: InputSearchProps) {

  return (
    <div
      className={clsx(
        styles.inputSearch,
        variant === "hero" ? styles.inputSearchHero : styles.inputSearchDefault
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
      />
    </div>
  );
}
