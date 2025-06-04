"use client";

import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon, xIcon } from "@icons";
import { useState } from "react";
import styles from "./dropdown.module.scss";

interface DropdownProps {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const secondSection = options.slice(2);

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <Image
          src={HamburgerIcon}
          alt="Dropdown Icon"
          className={styles.hamburgerIcon}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <button onClick={toggleDropdown} className={styles.xButton}>
            <Image
              src={xIcon}
              alt="Dropdown Icon"
              className={styles.hamburgerIcon}
            />
          </button>
          <ul className={styles.section}>
            <li className={styles.firstSectionDropdownItem}>
              <Link
                href="/restaurants"
                onClick={() => setIsOpen(false)}
                className={styles.dropdownLink}
              >
                Restaurants
              </Link>
            </li>
            <li className={styles.firstSectionDropdownItem}>{"Chefs"}</li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.section}>
            {secondSection.map((option, index) => (
              <li key={index} className={styles.secondSectionDropdownItem}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
