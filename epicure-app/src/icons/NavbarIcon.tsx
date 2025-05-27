import Image from "next/image";
import styles from "./icons.module.scss";
import iconImage from "./iconsImages/Group1.svg";

export default function NavbarIcon() {
  return (
    <div className={styles.navbarIcon}>
      <Image
        src={iconImage}
        width={24}
        height={24}
        alt="Icon for Dropdown Menu"
      />
    </div>
  );
}
