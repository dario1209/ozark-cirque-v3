import styles from "./Marquee.module.css";

const ITEMS = ["SILKS","TRAPEZE","LYRA","FIRE","ACROBATICS","CONTORTION","YOGA","BREATHWORK","OZARK CIRQUE"];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  const doubledAlt = [...ITEMS.slice(4), ...ITEMS.slice(0,4), ...ITEMS.slice(4), ...ITEMS.slice(0,4)];
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.trackLeft}>
          {doubled.map((item, i) => <span key={i} className={styles.item}>{item}</span>)}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.trackRight}>
          {doubledAlt.map((item, i) => <span key={i} className={styles.item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}