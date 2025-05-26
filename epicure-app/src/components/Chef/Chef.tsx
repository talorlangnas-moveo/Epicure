import styles from "./chef.module.scss";
import { ChefInfo } from "@/types/interfaces/ChefInfo";

interface ChefProps {
  chef: ChefInfo;
}

export default function Chef({ chef }: ChefProps) {
  <div className={styles.mainContainer}>
    <h4>chef of the week:</h4>
    {chef.img}
    <div>
      <p>{chef.description}</p>
    </div>
  </div>;
}
