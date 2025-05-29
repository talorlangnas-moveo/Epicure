import Image from "next/image";
import { EpicureLogo} from '@icons';
import styles from "./header.module.scss";

export default function NavbarDesktop() {
  return (
    <div className={styles.desktopContainer}>
        <Image
          src={EpicureLogo}
          width={162}
          height={33}
          alt="Icon for Dropdown Menu"
        />
        <p>Restaurants</p>
        <p>Chefs</p>
    </div>
  );
}
