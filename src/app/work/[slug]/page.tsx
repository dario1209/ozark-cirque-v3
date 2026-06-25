import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SpinningCircle from "@/components/SpinningCircle";
import type { Metadata } from "next";
import styles from "./page.module.css";

const PROJECTS: Record<string, {
  title: string;
  year: string;
  project: string;
  disciplines: string[];
  description: string;
  prev: string;
}> = {
  "solo-aerial": {
    title: "SOLO AERIAL",
    year: "2018 — PRESENT",
    project: "SOLO PERFORMANCE",
    disciplines: ["Aerial Silks", "Trapeze", "Lyra", "Choreography", "Custom Rigging"],
    description:
      "Solo performances tailored to the space and the occasion. Each piece is choreographed from scratch, integrating the architecture and atmosphere of the venue into the work itself. From corporate galas to gallery openings, the goal is always the same: something unexpected, something that stops the room.",
    prev: "research",
  },
  ensemble: {
    title: "ENSEMBLE PRODUCTIONS",
    year: "2020 — PRESENT",
    project: "MULTI-ARTIST CIRCUS",
    disciplines: ["Creative Direction", "Production", "Cast Assembly", "Rigging Coordination", "Choreography"],
    description:
      "For larger productions, I assemble and direct casts of professional circus artists. Multi-artist circus for festivals, theaters, and large-scale events. Aerial acts, acrobatics, contortion, and fire performance woven into a single narrative arc designed for the event.",
    prev: "solo-aerial",
  },
  education: {
    title: "AERIAL EDUCATION",
    year: "2016 — PRESENT",
    project: "TEACHING PRACTICE",
    disciplines: ["Private Sessions", "Workshops", "Residencies", "Curriculum Design", "Breathwork"],
    description:
      "My teaching integrates aerial practice with yoga, breathwork, and mindfulness. I work with students at all levels, from first-timers to working professionals. Circus as a movement practice, not a trick list — accessible, adaptive, and deeply human.",
    prev: "ensemble",
  },
  research: {
    title: "CO-LEARNING RESEARCH",
    year: "2022 — PRESENT",
    project: "MA RESEARCH",
    disciplines: ["Circus Pedagogy", "Social-Emotional Learning", "Youth Programming", "Art Education", "Community Collaboration"],
    description:
      "My MA research examines circus as a co-learning practice. I collaborate with therapists, educators, and youth program practitioners to explore how embodied circus practice builds trust, resilience, and self-regulation in community settings.",
    prev: "education",
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = PROJECTS[params.slug];
  return { title: `${p?.title ?? "Work"} — Brittany Paul / Ozark Cirque` };
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  if (!project) return <div>Not found</div>;

  const SCATTERED = [
    { top: "8%",  left: "52%", rotate:  4, width: 280 },
    { top: "34%", left: "62%", rotate: -6, width: 240 },
    { top: "58%", left: "72%", rotate:  8, width: 260 },
  ];

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* Giant title */}
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{project.title}</h1>
          {/* Spinning circle — positioned relative to title */}
          <div className={styles.spinnerWrapper}>
            <Link href={`/work/${project.prev}`}>
              <SpinningCircle text="  PREVIOUS  PROJECT  →  " size={100} />
            </Link>
          </div>
        </div>

        {/* Meta + scattered photos */}
        <div className={styles.content}>
          <div className={styles.left}>
            {/* Meta table */}
            <div className={styles.meta}>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>YEAR</span>
                <span className={styles.metaVal}>{project.year}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>PROJECT</span>
                <span className={styles.metaVal}>{project.project}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>DISCIPLINES</span>
                <div className={styles.metaVal}>
                  {project.disciplines.map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project section */}
            <div className={styles.projectSection}>
              <div className={styles.projectHeading}>Project</div>
              <p className={styles.projectDesc}>{project.description}</p>
            </div>

            <Link href="/work" className={styles.back}>
              ← BACK TO WORK
            </Link>
          </div>

          {/* Scattered polaroids on right */}
          <div className={styles.right}>
            {SCATTERED.map((p, i) => (
              <div
                key={i}
                className={styles.polaroidWrapper}
                style={{ top: p.top, left: p.left }}
              >
                <div
                  className={styles.polaroid}
                  style={{ width: p.width, transform: `rotate(${p.rotate}deg)` }}
                >
                  <div className={styles.polaroidImg}>
                    <span className={styles.polaroidLabel}>Photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
