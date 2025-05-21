import styles from "./header.module.scss";

import { ForknifeIcon, NavbarIcon, RightGroupIcons } from '@/components/icons';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavbarIcon />
      <ForknifeIcon />
      <RightGroupIcons />
    </header>
  );
}
