import Image from "next/image";
import styles from "./icons.module.scss";

export default function SpicyIcon() {
  return (
    <Image
      className={styles.iconGeneral}
      src="/icons/spicyIcon-mobile.svg"
      alt="Icon for Dropdown Menu"
      width={46} 
      height={34}
    />
  );
}
