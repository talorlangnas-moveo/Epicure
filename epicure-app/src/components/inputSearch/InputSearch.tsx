import styles from "./inputSearch.module.scss";
import Image from "next/image";
import { SearchIcon } from "@icons";
import clsx from "clsx";

interface InputSearchProps {
  variant?: "default" | "hero";
}

export default function InputSearch({ variant = "default" }: InputSearchProps) {
  return (
    // <div className={styles.inputSearch}>
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
        style={{ objectFit: 'contain' }}
        />
      </div>
      <input className={styles.inputContainer}
        id="search-input"
        type="text"
        placeholder="Search for restaurant cuisine, chef"
      />
    </div>
  );
}
