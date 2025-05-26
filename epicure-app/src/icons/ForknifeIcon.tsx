import Image from "next/image";
import styles from './icons.module.scss';
import iconImage from './iconsImages/fork_knife-logo.svg';

export default function ForknifeIcon() {
  return (
    <div className={styles.forknifeIcon}>
      <Image
        src={iconImage}
        width={32.93}
        height={32}
        alt="fork and knife logo"
      />
    </div>
  );
}
