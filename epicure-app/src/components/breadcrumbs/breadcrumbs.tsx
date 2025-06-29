"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './breadcrumbs.module.scss'; 

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== ""); 
   console.log("pathname: ", pathname);
   console.log("pathSegments: ", pathSegments);

   const breadcrumbs: BreadcrumbItem[] = [{ label: 'home', href: '/' }];

   pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = decodeURIComponent(segment.replace(/-/g, ' ')); 

    breadcrumbs.push({ label, href });
  });

   return (
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
              <span className={styles.separator}>{' > '}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

