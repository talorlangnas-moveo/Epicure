import styles from './hero.module.scss';
import InputSearch from '@/components/inputSearch/inputSearch_tmp'

export default function HeroContainer() {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.heroTitle}>
        Epicure works with the top<br />
        chef restaurants in Tel Aviv
      </p>
      <InputSearch variant="hero" disableSearch={true} />
    </div>
  );
}
