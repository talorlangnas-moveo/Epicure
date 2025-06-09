import Image from "next/image";
import { CardInfo } from "@components/card/card";
import styles from "./dishOrderCard.module.scss";
import { xIcon } from "@/icons";

interface DishOrderCardProps {
    dishCard: CardInfo;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function DishOrderCard({ dishCard, onClose, children }: DishOrderCardProps) {
    return (
        <div className={styles.dishOrderCard}>
            <button onClick={onClose} className={styles.xButton}>
                <Image
                    src={xIcon}
                    alt="Close"
                    className={styles.xIcon}
                />
            </button>
            <Image src={dishCard.imgUrl} alt={dishCard.title} className={styles.dishImage} />
            <div className={styles.dishInfo}>
                <h1 className={styles.dishTitle}>{dishCard.title}</h1>
                <p className={styles.dishDescription}>{dishCard.description}</p>
            </div>
            {children && children}
        </div>
    );
}