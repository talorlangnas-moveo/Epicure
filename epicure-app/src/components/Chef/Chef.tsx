import Image from "next/image";
import styles from "./chef.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";

interface ChefProps {
  chef: ChefInfo;
}

export default function Chef({ chef }: ChefProps) {
  <div className={styles.mainContainer}>
    <h4>chef of the week:</h4>
    <div className={styles.chefContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={chef.imgUrl}
          alt="Example"
          fill
          className={styles.image}
          placeholder="blur"
        />
        <div className={styles.footerOverlay}>
          <p className={styles.footerText}>Your footer text here</p>
        </div>
      </div>
    </div>
  </div>;
}
