'use client';

import Image, { StaticImageData } from "next/image";
import styles from "./infoPanel.module.scss";
import { ArrowsIcon } from "@icons";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import {CardType} from '@/types/cardType';

interface InfoPanelProps {
  children?: React.ReactNode;
  childrenDesk?: React.ReactNode;
  title?: string;
  type: CardType;
  displayButton?: boolean;
  buttonLabel?: string;
  buttonImage?: StaticImageData | string;
  buttonStyle?: string;
  buttonImgWidth?: number;
  buttonImgHeight?: number;
}

export default function InfoPanel({
  children,
  childrenDesk,
  title,
  type,
  displayButton = true,
  buttonLabel = "All restaurants",
  buttonStyle = "panelButton",
  buttonImage = ArrowsIcon,
  buttonImgWidth = 24,
  buttonImgHeight = 24,
}: InfoPanelProps) {

  const width = useWindowWidth();

  return (
    <div className={`${styles.infoPanel} ${styles[type]}`}>
      <h4 className={`${styles[type]}`}>{title}</h4>
      {width !== null && (
        width > 1023 ? <>{childrenDesk ?? children}</> : <>{children}</>
      )}
      {displayButton && (
        <div className={`${styles[buttonStyle]}`}>
        <p>{buttonLabel}</p>
        <Image
          src={buttonImage}
          width={buttonImgWidth}
          height={buttonImgHeight}
          alt="Arrows Icon"
        />
      </div>
      )}
    </div>
  );
}
