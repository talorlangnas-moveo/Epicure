import Image from "next/image";
import styles from './icons.module.scss';


export default function ForknifeIcon() {
  return (
    <div className={styles.forknifeIcon}>
      <Image
        src="/icons/fork_knife-logo.svg"
        width={32.93}
        height={32}
        alt="fork and knife logo"
      />
    </div>
  );
}
