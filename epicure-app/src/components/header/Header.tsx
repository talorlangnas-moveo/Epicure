"use client";

import styles from "./header.module.scss";
import RightGroupIcons from "./rightGroupIcons";
import NavbarMobile from "./navbarMobile";
import NavbarDesktop from "./navbarDesktop";

import { useIsDesktopView } from "@/hooks/useIsDesktopView";

export default function Header() {
  const isDesktop = useIsDesktopView();

  return (
    <header className={styles.header}>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}

      <RightGroupIcons />
    </header>
  );
}
