import styles from './aboutUs.module.scss';
import { AppStoreIcon, GooglePlayIcon } from '@icons';
export default function AppDownloadButtons() {
    return (
        <div className={styles.appDownload}>
            <GooglePlayIcon />
            <AppStoreIcon />
        </div>
    );
}