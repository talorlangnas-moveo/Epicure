import Image from "next/image";
import styles from "./icons.module.scss";
import iconImage from "./iconsImages/spicyIcon-mobile.svg";

export default function SpicyIcon() {
  return (
    <Image
      className={styles.iconGeneral}
      src={iconImage}
      alt="Icon for Dropdown Menu"
      width={46} 
      height={34}
    />
  );
}
