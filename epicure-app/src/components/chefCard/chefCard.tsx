import Image from "next/image";
import styles from "./chefCard.module.scss";
import { ChefInfo } from "@/types/interfaces/chefInfo_tmp";

interface ChefProps {
  children?: React.ReactNode;
  childrenDesk?: React.ReactNode;
  chef: ChefInfo;
}

export default function ChefCard({ chef, children }: ChefProps) {
  return (
    <div className={styles.chefContainer}>
      <h4 className={styles.heading}>chef of the week:</h4>
      <Image
        src={chef.imgUrl}
        alt="Yossi Shitrit Image"
        sizes="100vw"
        className={styles.chefImage}
      />
      <div className={styles.chefInfo}>
        <p>{chef.description}</p>
      </div>
      {children}
    </div>
  );
}
