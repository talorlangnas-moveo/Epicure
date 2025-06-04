import Image from "next/image";
import Link from "next/link";
import { EpicureLogo } from "@icons";
import styles from "./header.module.scss";

export default function NavbarDesktop() {
  return (
    <div className={styles.desktopContainer}>
      <Link href="/" onClick={() => {}}>
        <Image
          src={EpicureLogo}
          width={162}
          height={33}
          alt="Icon for Dropdown Menu"
        />
      </Link>
      <Link href="/restaurants" className={styles.desktopLinkStyle}>
        Restaurants
      </Link>
      <p>Chefs</p>
    </div>
  );
}
