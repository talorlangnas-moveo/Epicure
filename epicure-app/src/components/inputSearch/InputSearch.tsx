import styles from './inputSearch.module.scss';
import { SearchIcon } from '@/components/icons';

export default function InputSearch() {
  return (
    <div className={styles.inputSearch}>
      <div className={styles.searchIcon}>
      <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for restaurant cuisine, chef"
        // className={styles.inputSearch}
      />
    </div>
  );
}
