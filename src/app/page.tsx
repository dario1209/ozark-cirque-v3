import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SpinningCircle from "@/components/SpinningCircle";
import Marquee from "@/components/Marquee";
import Timeline from "@/components/Timeline";
import ScatteredPhotos from "@/components/ScatteredPhotos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <h1 className={styles.heroName}>
            BRITTANY
            <br />
            PAUL
          </h1>

          <div className={styles.heroBottom}>
            {/* Disciplines */}
            <div className={styles.disciplines}>
              <span>Aerial Performance</span>
              <span>Circus Education</span>
              <span>Movement Research</span>
              <span>Creative Direction</span>
            </div>

            {/* Spinning circle + portrait */}
            <div className={styles.heroRight}>
              <SpinningCircle text="  FEATURED  WORK  ↓  " size={110} />
              <div className={styles.portrait}>
  <img src="/images/portrait1.jpg" alt="Brittany Paul" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <Marquee />

        {/* ── TIMELINE ── */}
        <Timeline />

        {/* ── SCATTERED POLAROIDS ── */}
        <ScatteredPhotos />

        {/* ── BIO TEASER ── */}
        <section className={styles.bioTeaser}>
          <div className={styles.bioTeaserInner}>
            <p className={styles.bioText}>
              Today, I lead Ozark Cirque, shaping everything from performance and
              production to teaching and research as the company grows across the region.
            </p>
            <Link href="/about" className={styles.bioLink}>
              MORE ABOUT ME →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
