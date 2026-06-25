import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Brittany Paul / Ozark Cirque",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.heading}>
          LET&apos;S MAKE
          <br />
          SOMETHING.
        </h1>

        <div className={styles.grid}>
          <div>
            <div className={styles.label}>Email</div>
            <a href="mailto:hello@ozarkcirque.com" className={styles.emailLink}>
              hello@ozarkcirque.com
            </a>
          </div>

          <div>
            <div className={styles.label}>Based in</div>
            <p className={styles.detail}>Northwest Arkansas</p>
          </div>

          <div>
            <div className={styles.label}>Social</div>
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                Instagram ↗
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                Vimeo ↗
              </a>
            </div>
          </div>
        </div>

        <p className={styles.collab}>
          I am interested in collaborating with therapists, educators, and youth program
          practitioners exploring circus as a tool for social-emotional learning. If
          this resonates, I would love to hear from you.
        </p>
      </main>
      <Footer />
    </>
  );
}
