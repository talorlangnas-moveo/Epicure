import styles from './hero.module.scss';
import HeroContainer from './HeroContainer';
import Background from './Background';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Background />
      <HeroContainer />
    </div>
  );
}
