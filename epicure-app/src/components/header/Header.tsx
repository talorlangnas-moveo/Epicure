import Image from "next/image";
import styles from "./header.module.scss";
import { HamburgerIcon } from "@/icons/index";
import { ForkKnifeIcon } from "@/icons/index";
import { RightGroupIcons } from "@/icons/index";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hamburgerIcon}>
        <Image
          src={HamburgerIcon}
          width={24}
          height={24}
          alt="Icon for Dropdown Menu"
        />
      </div>
      <div className={styles.forknifeIcon}>
        <Image
          src={ForkKnifeIcon}
          width={32.93}
          height={32}
          alt="fork and knife logo"
        />
      </div>
      <RightGroupIcons />
    </header>
  );
}
