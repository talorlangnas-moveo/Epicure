import Image from "next/image";
import { HamburgerIcon } from "@/icons";
import styles from "./header.module.scss";

export default function Navbar() {
    return (
        <div className={styles.hamburgerIcon}>
        <Image
          src={HamburgerIcon}
          width={24}
          height={24}
          alt="Icon for Dropdown Menu"
        />
      </div>
    );
}