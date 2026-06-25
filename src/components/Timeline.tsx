import styles from "./Timeline.module.css";

const ITEMS = [
  {
    year: "2024",
    title: "CURRENTLY",
    desc: "Leading Ozark Cirque, producing circus events and teaching aerial arts across Northwest Arkansas while pursuing research in circus pedagogy.",
  },
  {
    year: "2023",
    title: "MA ART EDUCATION",
    desc: "Graduate research examining circus as a co-learning practice and its applications in social-emotional development for at-risk youth.",
  },
  {
    year: "2022",
    title: "ENSEMBLE EXPANSION",
    desc: "Began assembling and directing casts of professional circus artists for larger productions at festivals, theaters, and corporate events.",
  },
  {
    year: "2021",
    title: "TEACHING PRACTICE",
    desc: "Launched a teaching practice integrating aerial technique with yoga, breathwork, and mindfulness for students at all levels.",
  },
  {
    year: "2019",
    title: "OZARK CIRQUE FOUNDED",
    desc: "Founded Ozark Cirque, LLC to build a home for professional circus arts in Northwest Arkansas.",
  },
  {
    year: "2016",
    title: "AERIAL BEGINNINGS",
    desc: "Came to aerial arts through climbing and yoga, searching for a practice that could hold strength, breath, expression, and risk at once.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={`${styles.track} hide-scrollbar`}>
        {ITEMS.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.imgArea}>
              <span className={styles.imgLabel}>Photo</span>
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
