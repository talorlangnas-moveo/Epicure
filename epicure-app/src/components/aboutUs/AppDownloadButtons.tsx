import Image from "next/image";
import styles from './aboutUs.module.scss';
import { AppStoreIcon, GooglePlayIcon } from '@icons';

export default function AppDownloadButtons() {
    return (
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
    );
}