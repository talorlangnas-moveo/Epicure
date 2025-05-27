import styles from "./chef.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";
import BackgroundImage from "@/components/backgroundImage/backgroundImage";
import PopularRestaurants from "@components/popularRestaurants/popularRestaurants";

interface ChefProps {
  chef: ChefInfo;
}

export default function Chef({ chef }: ChefProps) {
  return (
    <div>
      <div className={styles.chefContainer}>
        <h4 className={styles.heading}>chef of the week:</h4>
        <BackgroundImage cardImg={chef.cardImg} />
        <div className={styles.chefInfo}>
          <p>{chef.description}</p>
        </div>
      </div>
      <PopularRestaurants
        cards={chef.chefsRestaurants}
        type="restaurant"
        title={chef.firstName}
      />
    </div>
  );
}
