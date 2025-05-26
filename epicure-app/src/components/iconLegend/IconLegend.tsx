import IconContainer from "./iconContainer";
import { SpicyIcon, VeganIcon, VegitarianIcon } from "@/icons/index";
import styles from "./iconLegend.module.scss";

export default function iconLegend() {
  return (
    <div className={styles.iconLegendContainer}>
      <h4 className={styles.heading}>THE MEANING OF OUR ICONS:</h4>
      <div className={styles.iconsGroup}>
        <IconContainer
          iconContainer={{
            icon: <SpicyIcon />,
            description: "Spicy",
          }}
          className={styles.spicyIconContainer}
        />
        <IconContainer
          iconContainer={{
            icon: <VegitarianIcon />,
            description: "Vegetarian",
          }}
          className={styles.iconContainer}
        />

        <IconContainer
          iconContainer={{
            icon: <VeganIcon />,
            description: "Vegan",
          }}
          className={styles.iconContainer}
        />
      </div>
    </div>
  );
}
