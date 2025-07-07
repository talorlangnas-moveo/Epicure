"use client";

import Image from "next/image";
import styles from "./search.module.scss";
import { SearchIcon, xIcon } from "@icons";
import { useState } from "react";
import InputSearch from "@components/inputSearch/inputSearch";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleSearch} className={styles.searchButton}>
        <Image src={SearchIcon} width={20} height={20} alt="Search Icon" />
      </button>

      {isOpen && (
        <div className={styles.searchMenu}>
          <div className={styles.searchHeader}>
            <button onClick={toggleSearch} className={styles.xButton}>
              <Image
                src={xIcon}
                alt="Dropdown Icon"
                className={styles.hamburgerIcon}
              />
            </button>
            <div className={styles.titleContainer}>
              <h1 className={styles.searchTitle}>Search</h1>
            </div>
          </div>
          <div className={styles.searchInputContainer}>
            <InputSearch variant="default" />
          </div>
        </div>
      )}
    </div>
  );
}
