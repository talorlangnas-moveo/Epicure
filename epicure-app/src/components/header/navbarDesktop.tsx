import Image from "next/image";
import Link from "next/link";
import { EpicureLogo } from "@icons";
import styles from "./header.module.scss";

export default function NavbarDesktop() {
  const navBarOptions = [
    { href: "/restaurants", text: "Restaurants" },
    { href: "/chefs", text: "Chefs" },
  ];

  return (
    <div className={styles.desktopContainer}>
      <Link href="/">
        <Image
          src={EpicureLogo}
          width={162}
          height={33}
          alt="Icon for Dropdown Menu"
        />
      </Link>
      {navBarOptions.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={styles.desktopLinkStyle}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}
