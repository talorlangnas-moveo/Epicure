import Image from "next/image";
import Link from "next/link";
import { ForkKnifeIcon } from "@/icons";
import styles from "./header.module.scss";
import Dropdown from "@components/dropdown/dropdown";

export default function navbarMobile() {

  const dropdownOptions = [
    { href: "/restaurants", text: "Restaurants" },
    { href: "/chefs", text: "Chefs" },
    { href: "/", text: "Contact Us" },
    { href: "/", text: "Term of Use" },
    { href: "/", text: "Privacy Policy" },
  ];

  return (
    <div className={styles.navbarMobile}>
      <Dropdown options={dropdownOptions} />
      <Link href="/" className={styles.linkStyle}>
        <Image
          src={ForkKnifeIcon}
          width={32.93}
          height={32}
          alt="fork and knife logo"
          className={styles.forknifeIcon}
        />
      </Link>
    </div>
  );
}
