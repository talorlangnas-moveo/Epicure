import styles from "./iconLegend.module.scss";
import Image, { StaticImageData } from "next/image";

export interface IconContainerProps {
  icon: StaticImageData;
  description: string;
}

export default function IconContainer({ icon, description}: IconContainerProps) {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={icon}
          alt="Search Icon"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h4 className={styles.iconContainerDescription}>{description}</h4>
    </div>
  );
}
