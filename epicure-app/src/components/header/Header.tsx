import Image from "next/image";
import styles from "./header.module.scss";
import { ForkKnifeIcon } from "@/icons/index";
import { RightGroupIcons } from "@/icons";
import Navbar from "./navbar";
// import MediaQuery from '@components/responsive/responsive';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.forknifeIcon}>
        <Image
          src={ForkKnifeIcon}
          width={32.93}
          height={32}
          alt="fork and knife logo"
        />
      </div>
      <RightGroupIcons />
    </header>
  );
}
