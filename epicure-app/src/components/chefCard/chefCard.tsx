import styles from "./chefCard.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";
import BackgroundImage from "@/components/backgroundImage/backgroundImage";

interface ChefProps {
  children?: React.ReactNode;
  chef: ChefInfo;
}

export default function ChefCard({ chef, children }: ChefProps) {
  return (
    <div>
      <div className={styles.chefContainer}>
        <h4 className={styles.heading}>chef of the week:</h4>
        <BackgroundImage cardImg={chef.cardImg} />
        <div className={styles.chefInfo}>
          <p>{chef.description}</p>
        </div>
      </div>
      {  children }
    </div>
  );
}
