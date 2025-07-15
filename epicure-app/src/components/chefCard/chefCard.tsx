import Image from "next/image";
import styles from "./chefCard.module.scss";
import { Chef } from "@/types/interfaces/chef";
import { API_BASE_URL } from "@/utils/constants";

interface ChefProps {
  children?: React.ReactNode;
  childrenDesk?: React.ReactNode;
  chef?: Chef | null;
}

export default function ChefCard({ chef, children }: ChefProps) {
  return ( chef && 
    <div className={styles.chefContainer}>
    <h4 className={styles.heading}>chef of the week:</h4>
    <div className={styles.chefImageContainer}>
      <Image
        src={`${API_BASE_URL}/${chef.imgUrl}`}
        alt={`${chef.firstName} ${chef.lastName} image`}
        fill
      />
      {chef.imgUrl === "static/chefs/chefPlaceholder.png" && (
          <div className={styles.titleContainer}>
            <h1 className={styles.cardTitle}>{chef.firstName} {chef.lastName}</h1>
          </div>
        )}
    </div>
    <div className={styles.chefInfo}>
      <p>{chef.description}</p>
    </div>
      {children}
    </div>
  );
}
