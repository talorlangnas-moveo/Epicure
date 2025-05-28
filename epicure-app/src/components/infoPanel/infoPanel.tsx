import Image, { StaticImageData } from "next/image";
import styles from "./infoPanel.module.scss";
import { ArrowsIcon } from "@icons";

interface InfoPanelProps {
  children?: React.ReactNode;
  title?: string;
  buttonLabel?: string;
  buttonImage?: StaticImageData | string;
  buttonStyle?: string;
  buttonImgWidth?: number;
  buttonImgHeight?: number;
}

export default function InfoPanel({
  children,
  title,
  buttonLabel = "All restaurants",
  buttonStyle = "panelButton",
  buttonImage = ArrowsIcon,
  buttonImgWidth = 24,
  buttonImgHeight = 24,
}: InfoPanelProps) {
  return (
    <div className={styles.infoPanel}>
      <h4>{title}</h4>
      {children}
      <div className={`${styles[buttonStyle]}`}>
        <p>{buttonLabel}</p>
        <Image
          src={buttonImage}
          width={buttonImgWidth}
          height={buttonImgHeight}
          alt="Arrows Icon"
        />
      </div>
    </div>
  );
}
