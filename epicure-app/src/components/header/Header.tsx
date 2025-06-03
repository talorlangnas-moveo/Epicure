"use client";

import styles from "./header.module.scss";
import RightGroupIcons from "./rightGroupIcons";
import NavbarMobile from "./navbarMobile";
import NavbarDesktop from "./navbarDesktop";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Header() {
  const width = useWindowWidth();

  return (
    <header className={styles.header}>
      {width !== null && (width > 1023 ? <NavbarDesktop /> : <NavbarMobile />)}

      <RightGroupIcons />
    </header>
  );
}
