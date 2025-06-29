"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./breadcrumbs.module.scss";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  itemsMap: Map<string, string>;
}

export default function Breadcrumbs({ itemsMap }: BreadcrumbsProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbs: BreadcrumbItem[] = [{ label: "home", href: "/" }];

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment.replace(/-/g, " "));

    const restaurantName = itemsMap.get(label);
    if (restaurantName) {
      breadcrumbs.push({ label: restaurantName, href });
    } else {
      breadcrumbs.push({ label, href });
    }
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
