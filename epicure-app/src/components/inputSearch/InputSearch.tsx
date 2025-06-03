import styles from "./inputSearch.module.scss";
import Image from "next/image";
import { SearchIcon } from "@icons";
export default function InputSearch() {
  return (
    <div className={styles.inputSearch}>
      <div className={styles.searchIcon}>
        <Image 
        src={SearchIcon} 
        alt="Search Icon" 
        fill
        style={{ objectFit: 'contain' }}
        />
      </div>
      <input className={styles.inputContainer}
        id="search-input"
        type="text"
        placeholder="Search for restaurant cuisine, chef"
      />
    </div>
  );
}
