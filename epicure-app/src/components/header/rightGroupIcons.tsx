import Image from "next/image";
import styles from "./header.module.scss";
import { PersonIcon, BagIcon } from "@icons";
import Search from "@components/search/search";

export default function RightGroupIcons() {
  return (
    <div className={styles.rightGroupIcons}>
      < Search />
      <Image src={PersonIcon} width={20} height={20} alt="Icon" />
      <Image src={BagIcon} width={20} height={20} alt="Bag Icon" />
    </div>
  );
}
