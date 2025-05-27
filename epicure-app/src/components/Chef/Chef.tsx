import styles from "./chef.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";
import BackgroundImage from "@/components/backgroundImage/backgroundImage";

interface ChefProps {
  chef: ChefInfo;
}

export default function Chef({ chef }: ChefProps) {
  return (
    <div className={styles.chefContainer}>
      <h4 className={styles.heading}>chef of the week:</h4>
      <BackgroundImage cardImg={chef.cardImg} />
      <div className={styles.chefInfo}>
        <p>{chef.description}</p>
      </div>
    </div>
  );
}
