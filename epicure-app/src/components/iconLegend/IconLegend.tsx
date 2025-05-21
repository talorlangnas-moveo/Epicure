import IconContainer from "./IconContainer";
import { SpicyIcon, VeganIcon, VegitarianIcon } from "@/icons/index";
import styles from "./iconLegend.module.scss";

export default function iconLegend() {
  return (
    <div className={styles.container}>
      <div className={styles.iconLegendContainer}>
        <h4>THE MEANING OF OUR ICONS:</h4>
        <div className={styles.iconsGroup}>
          <IconContainer
            iconContainer={{
              icon: <SpicyIcon />,
              description: "Spicy",
            }}
          />
          <IconContainer
            iconContainer={{
              icon: <VegitarianIcon />,
              description: "Vegetarian",
            }}
          />
          <IconContainer
            iconContainer={{
              icon: <VeganIcon />,
              description: "Vegan",
            }}
          />
        </div>
      </div>
    </div>
  );
}
