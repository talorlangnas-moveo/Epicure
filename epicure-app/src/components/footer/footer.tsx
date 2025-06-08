import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContent}>
      <h4 className={styles.footerText}>Contact Us</h4>
      <h4 className={styles.footerText}>Term of Use</h4>
      <h4 className={styles.footerText}>Privacy Policy</h4>
    </div>
  );
}
