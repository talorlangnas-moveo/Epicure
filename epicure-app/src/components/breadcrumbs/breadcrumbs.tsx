"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./breadcrumbs.module.scss";
import { useBreadcrumbsContext } from "@components/breadcrumbs/breadcrumbsContext";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const { restaurantName } = useBreadcrumbsContext();
  const breadcrumbs: BreadcrumbItem[] = [{ label: "home", href: "/" }];

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    let label = decodeURIComponent(segment.replace(/-/g, " "));
    
    if (pathSegments[0] === "restaurants" && index === 1) {
      label = restaurantName ? truncateText(restaurantName, 15) : "Loading...";
    }

    breadcrumbs.push({ label, href });
  });

  return (
    <div className={styles.breadcrumbsWrapper}>
      <nav className={styles.breadcrumbs}>
        <ul>
          {breadcrumbs.map((item, index) => (
            <li key={item.href}>
              {index < breadcrumbs.length - 1 ? (
                <Link href={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.currentBreadcrumb}>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}>{" > "}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
