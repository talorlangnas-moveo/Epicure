import Image from "next/image";
import styles from "./header.module.scss";
import SearchButton from "./searchButton";
import { PersonIcon, BagIcon } from "@/icons/index";

export default function RightGroupIcons() {
  return (
    <div className={styles.rightGroupIcons}>
      <SearchButton />
      <Image src={PersonIcon} width={20} height={20} alt="Icon" />
      <Image src={BagIcon} width={20} height={20} alt="Bag Icon" />
    </div>
  );
}
