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
  // Double the items so the loop is seamless
  const doubled = [...ITEMS, ...ITEMS];
  const doubledAlt = [...ITEMS.slice(4), ...ITEMS.slice(0, 4), ...ITEMS.slice(4), ...ITEMS.slice(0, 4)];

  return (
    <section className={styles.section}>
      {/* Row 1 — scrolls left */}
      <div className={styles.row}>
        <div className={styles.trackLeft}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className={styles.row}>
        <div className={styles.trackRight}>
          {doubledAlt.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
