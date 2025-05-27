import styles from './inputSearch.module.scss';
import Image from "next/image";
import { SearchIcon } from "@icons/index"; 
export default function InputSearch() {
  return (
    <div className={styles.inputSearch}>
      <div className={styles.searchIcon}>
      <Image
              src={SearchIcon}
              width={20} 
              height={20} 
              alt="Search Icon" />
      </div>
      <input
        type="text"
        placeholder="Search for restaurant cuisine, chef"
        // className={styles.inputSearch}
      />
    </div>
  );
}
