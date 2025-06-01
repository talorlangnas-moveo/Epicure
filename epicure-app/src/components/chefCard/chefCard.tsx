// "use client";

import Image from "next/image";
import styles from "./chefCard.module.scss";
import { ChefInfo } from "@/types/interfaces/chefInfo";
import YossiShitritImage from "@public/chefs/Yossi_Shitrit.png";
// import { useWindowWidth } from "@/hooks/useWindowWidth";
// import CardsDisplay from '@components/cardsDisplay/cardsDisplay';

interface ChefProps {
  children?: React.ReactNode;
  childrenDesk?: React.ReactNode;
  chef: ChefInfo;
}

export default function ChefCard({ chef, children }: ChefProps) {
  // const width = useWindowWidth();
  return (
    // <div>
      <div className={styles.chefContainer}>
        <h4 className={styles.heading}>chef of the week:</h4>
        <Image
            src={YossiShitritImage}
            alt="Yossi Shitrit Image"
            sizes="100vw"
            className={styles.chefImage}
          />
        <div className={styles.chefInfo}>
          <p>{chef.description}</p>
        </div>
      {/* {width !== null && (width > 1023 ? <CardsDisplay cards={chef.chefsRestaurants}/> : <> {children}</>)} */}
      {children}
      </div>
    // </div>
  );
}
