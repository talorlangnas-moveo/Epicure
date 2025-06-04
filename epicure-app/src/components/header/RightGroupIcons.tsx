import Image from "next/image";
import styles from "./header.module.scss";
import { PersonIcon, BagIcon, SearchIcon } from "@icons";

export default function RightGroupIcons() {
  return (
    <div className={styles.rightGroupIcons}>
      <Image src={SearchIcon} width={20} height={20} alt="Search Icon" />
      <Image src={PersonIcon} width={20} height={20} alt="Icon" />
      <Image src={BagIcon} width={20} height={20} alt="Bag Icon" />
    </div>
  );
}
