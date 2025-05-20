import styles from './inputSearch.module.scss';

export default function InputSearch() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className={styles.inputSearch}
    />
  );
}
