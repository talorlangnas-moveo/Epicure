import Image from "next/image";
import styles from "./mobileViewWrapper.module.scss";
import { xIcon } from "@/icons";
import Footer from "../footer/footer";

interface MobileViewWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function MobileViewWrapper({
  onClose,
  children,
}: MobileViewWrapperProps) {
  return (
    <div className={styles.mobileViewWrapper}>
      <button onClick={onClose} className={styles.xButton}>
        <Image src={xIcon} alt="Close" className={styles.xIcon} />
      </button>
      {children}
      <Footer />
    </div>
  );
}
