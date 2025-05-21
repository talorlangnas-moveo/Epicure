import styles from './hero.module.scss';
import InputSearch from '@components/inputSearch/InputSearch'

export default function HeroContainer() {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.heroTitle}>
        Epicure works with the top<br />
        chef restaurants in Tel Aviv
      </p>
      <InputSearch />
    </div>
  );
}
