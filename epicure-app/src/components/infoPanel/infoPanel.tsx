"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./infoPanel.module.scss";
import { ArrowsIcon } from "@icons";
import { useIsDesktopView } from "@/hooks/useIsDesktopView";
import { CardType } from "@/types/cardType";
import Link from "next/link";

interface InfoPanelProps {
  children?: React.ReactNode;
  childrenDesk?: React.ReactNode;
  title?: string;
  type: CardType;
  displayButton?: boolean;
  href?: string;
  displayButtonDesktop?: boolean;
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
  displayButtonDesktop = true,
  href = "/restaurants",
  buttonLabel = "All restaurants",
  buttonStyle = "panelButton",
  buttonImage = ArrowsIcon,
  buttonImgWidth = 24,
  buttonImgHeight = 24,
}: InfoPanelProps) {
  const isDesktop = useIsDesktopView();

  return (
    <div className={`${styles.infoPanel} ${styles[type]}`}>
      <h4 className={`${styles[type]}`}>{title}</h4>
      {isDesktop ? <>{childrenDesk ?? children}</> : <>{children}</>}
      {!isDesktop ? (
        <Link href={href} className={styles.linkStyle}>
        <div className={`${styles[buttonStyle]}`}>
          <p>{buttonLabel}</p>
          <Image
            src={buttonImage}
            width={buttonImgWidth}
            height={buttonImgHeight}
            alt="Arrows Icon"
          />
        </div>
        </Link>
      ) : ( displayButtonDesktop &&
        <Link href={href} className={styles.linkStyle}>
          <div className={`${styles[buttonStyle]}`}>
            <p>{buttonLabel}</p>
            <Image
            src={buttonImage}
            width={buttonImgWidth}
            height={buttonImgHeight}
            alt="Arrows Icon"
          />
          </div>
        </Link>
      )}
    </div>
  );
}
