import Image from "next/image";
import styles from "./icons.module.scss";

export default function NavbarIcon() {
  return (
    <div className={styles.navbarIcon}>
      <Image
        src="/icons/Group1.svg"
        width={24}
        height={24}
        alt="Icon for Dropdown Menu"
      />
    </div>
  );
}
