import Image from "next/image";
import { AppStoreIcon, GooglePlayIcon, EpicureLogoMob } from '@icons';
import styles from "./aboutUs.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.epicureIcon}>
        <Image
          src={EpicureLogoMob}
          alt="Epicure Logo"
          className={styles.epicureImage}
        />
      </div>
       <div className={styles.appDownload}>
            <Image
                  src={GooglePlayIcon}
                  width={180}
                  height={52}
                  alt="Google Play Icon"
                />
            <Image
                  src={AppStoreIcon}
                  width={180}
                  height={52}
                  alt="App Store Icon"
                />
        </div>
        <h4 className={styles.heading}>about us:</h4>
        <div className={styles.aboutUsContent}>
        <p className={styles.firstParagraph}>
          {`Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. In a 
lacus vel justo fermentum
bibendum non 
eu ipsum. 
Cras porta malesuada
eros, eget blandit
turpis suscipit at. Vestibulum sed
massa in magna sodales porta. 
Vivamus elit urna,
dignissim a vestibulum.`}
        </p>
        <p className={styles.secondParagraph}>
          {`Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. In a 
lacus vel justo fermentum 
bibendum no 
eu ipsum. Cras porta 
malesuada eros.`}
        </p>
      </div>
    </div>
  );
}
