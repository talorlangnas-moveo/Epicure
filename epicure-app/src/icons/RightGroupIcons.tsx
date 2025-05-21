import Image from "next/image";
import styles from "./icons.module.scss";
import SearchIcon from "./SearchIcon";

export default function RightGroupIcons() {
    return (
        <div className={styles.rightGroupIcons}>
            <SearchIcon />
            <Image
                src="/icons/General.svg"
                width={20}
                height={20}
                alt="Icon"
            />
            <Image
                src="/icons/Bag.svg"
                width={20}
                height={20}
                alt="Bag Icon"
            />
        </div>

    );
}