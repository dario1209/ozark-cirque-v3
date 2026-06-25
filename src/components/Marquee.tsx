import styles from "./Marquee.module.css";

const ITEMS = [
  "SILKS",
  "TRAPEZE",
  "LYRA",
  "FIRE",
  "ACROBATICS",
  "CONTORTION",
  "YOGA",
  "BREATHWORK",
  "OZARK CIRQUE",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className={styles.section}>
      {/* Row 1 — left */}
      <div className={styles.row}>
        <div className={`${styles.track} marquee-left`}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className={styles.row}>
        <div className={`${styles.track} marquee-right`}>
          {[...ITEMS.slice(4), ...ITEMS.slice(0, 4), ...ITEMS].map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
