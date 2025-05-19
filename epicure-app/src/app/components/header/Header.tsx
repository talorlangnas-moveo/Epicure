import styles from "./header.module.scss";
import NavbarIcon from "./icons/NavbarIcon";
import ForknifeIcon from './icons/ForknifeIcon';
import RightGroupIcons from "./icons/RightGroupIcons";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavbarIcon />
      <ForknifeIcon />
      <RightGroupIcons />
    </header>
  );
}
