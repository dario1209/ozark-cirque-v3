import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© Ozark Cirque, LLC — Northwest Arkansas</span>
      <div className={styles.links}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Instagram
        </a>
        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Vimeo
        </a>
        <Link href="/contact" className={styles.link}>
          Email
        </Link>
      </div>
    </footer>
  );
}
