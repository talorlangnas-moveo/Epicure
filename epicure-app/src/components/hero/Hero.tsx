import Image from "next/image";
import styles from "./hero.module.scss";
import HeroContainer from "./heroContainer";
import heroImageUrl from "@public/hero-picture1.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        alt="heroImageUrl"
        src={heroImageUrl}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          // objectFit: "cover",
        }}
      />
      <HeroContainer />
    </div>
  );
}
