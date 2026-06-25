import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work — Brittany Paul / Ozark Cirque",
};

const PROJECTS = [
  {
    slug: "solo-aerial",
    title: "SOLO AERIAL",
    year: "2018 — PRESENT",
    tagline: "Intimate aerial performance for stages and private events.",
  },
  {
    slug: "ensemble",
    title: "ENSEMBLE PRODUCTIONS",
    year: "2020 — PRESENT",
    tagline: "Multi-artist circus for festivals, theaters, and large-scale events.",
  },
  {
    slug: "education",
    title: "AERIAL EDUCATION",
    year: "2016 — PRESENT",
    tagline: "Circus as a movement practice rooted in breath, awareness, and access.",
  },
  {
    slug: "research",
    title: "CO-LEARNING RESEARCH",
    year: "2022 — PRESENT",
    tagline: "Circus pedagogy, social-emotional learning, and arts-based youth programming.",
  },
];

export default function Work() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.heading}>WORK</h1>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className={styles.card}>
              <div className={styles.cardImg}>
                <span className={styles.cardImgLabel}>Photo</span>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardTagline}>{p.tagline}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
