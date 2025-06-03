import Image from "next/image";
import { ForkKnifeIcon } from "@/icons";
import styles from "./header.module.scss";
import Dropdown from "@components/dropdown/dropdown";

export default function navbarMobile() {
  const dropdownOptions = ["Restaurants", "Chefs", "Contact Us", "Term of Use", "Privacy Policy"];

  return (
    <div className={styles.navbarMobile}>
      <Dropdown options={dropdownOptions} />
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
