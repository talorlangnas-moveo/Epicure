"use client";

import styles from "./header.module.scss";
import RightGroupIcons from "./rightGroupIcons";
import NavbarMobile from "./navbarMobile";
import NavbarDesktop from "./navbarDesktop";

import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Header() {
  const isDesktop = useBreakpoint(1023);

  return (
    <header className={styles.header}>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}

      <RightGroupIcons />
    </header>
  );
}
