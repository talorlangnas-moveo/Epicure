import styles from "./chef.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";
import GenImage from "@components/myImage/GenImage";

interface ChefProps {
  chef: ChefInfo;
}

export default function Chef({ chef }: ChefProps) {
  return (
    <div className={styles.chefContainer}>
      <h4 className={styles.heading}>chef of the week:</h4>
      <GenImage cardImg={chef.cardImg} />
      <div className={styles.chefInfo}>
        <p>{chef.description}</p>
      </div>
    </div>
  );
}
