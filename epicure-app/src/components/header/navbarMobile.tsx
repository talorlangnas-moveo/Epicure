import Image from "next/image";
import { HamburgerIcon } from "@/icons";
import { ForkKnifeIcon } from "@/icons";
import styles from "./header.module.scss";

export default function navbarMobile() {
  return (
    <div className={styles.navbarMobile}>
      <Image
        src={HamburgerIcon}
        alt="Icon for Dropdown Menu"
        className={styles.hamburgerIcon}
      />
      <Image
        src={ForkKnifeIcon}
        width={32.93}
        height={32}
        alt="fork and knife logo"
        className={styles.forknifeIcon}
      />
    </div>
  );
}
