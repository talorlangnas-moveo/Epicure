import styles from './hero.module.scss';
import HeroContainer from './heroContainer';
import Background from './background';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Background />
      <HeroContainer />
    </div>
  );
}
