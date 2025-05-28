import IconContainer from "./iconContainer";
import { VeganIcon, VegitarianIcon, SpicyIconCard } from '@icons';
import styles from "./iconLegend.module.scss";

export default function iconLegend() {
  return (
    <div className={styles.iconLegendContainer}>
      <h4 className={styles.heading}>THE MEANING OF OUR ICONS:</h4>
      <div className={styles.iconsGroup}>
        <IconContainer icon={SpicyIconCard} description={"Spicy"} />
        <IconContainer icon={VegitarianIcon} description={"Vegitarian"} />
        <IconContainer icon={VeganIcon} description={"Vegan"} />
      </div>
    </div>
  );
}
