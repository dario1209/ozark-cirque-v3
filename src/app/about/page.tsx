import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Brittany Paul / Ozark Cirque",
};

export default function About() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.grid}>
          {/* Portrait column */}
          <div className={styles.portraitCol}>
            <div className={styles.portrait}>
              <span className={styles.portraitLabel}>Portrait</span>
            </div>
          </div>

          {/* Text column */}
          <div className={styles.textCol}>
            <h1 className={styles.name}>OZARK CIRQUE</h1>
            <div className={styles.subtitle}>Art Direction</div>

            <div className={styles.bio}>
              <p>
                I came to aerial arts through climbing and yoga, searching for a
                practice that could hold all of it at once — strength, breath,
                expression, risk. Over a decade later, I create and perform aerial work
                for stages, events, and spaces where something unexpected belongs.
              </p>
              <p>
                I work on silks, trapeze, lyra, and custom apparatus. I perform solo
                and assemble casts of professional artists for larger productions.
                Creative direction, rigging, choreography — starting always from the
                question of what a space needs rather than what I already know how to do.
              </p>
              <p>
                I founded Ozark Cirque to build a home for professional circus in
                Northwest Arkansas. The company produces events, connects performers
                with venues, and advocates for circus as a legitimate art form in a
                region where none existed.
              </p>
              <p>
                My teaching integrates aerial practice with yoga, breathwork, and
                mindfulness. I work with students at all levels. Circus as a movement
                practice — accessible, adaptive, and deeply human.
              </p>
              <p>
                I hold an MA in Art Education. My research examined circus as a
                co-learning practice and its applications in social-emotional
                development for at-risk youth. I am interested in collaborating with
                therapists, educators, and youth program practitioners exploring circus
                in community settings.
              </p>
              <p>
                I write about the things I think about when I am upside down. Circus
                history, philosophy of embodied practice, the pedagogy of risk, falling
                as a discipline.
              </p>
            </div>

            <div className={styles.contact}>
              <div className={styles.contactLabel}>Get in touch</div>
              <a href="mailto:hello@ozarkcirque.com" className={styles.email}>
                hello@ozarkcirque.com
              </a>
              <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                  Instagram
                </a>
                <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                  Vimeo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
