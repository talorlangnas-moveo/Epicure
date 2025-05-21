import { IconContainerData } from "@/types/interfaces/IconContainerData"
import styles from "./iconLegend.module.scss";


interface IconContainerProps {
  iconContainer: IconContainerData;
}

export default function IconContainer({iconContainer}: IconContainerProps) {
  return (
    <div className={styles.iconContainer}>
        <div>
            {iconContainer.icon}
        </div>
        <h4>
            {iconContainer.description}
        </h4>
    </div>
    
  );
}