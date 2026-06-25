import styles from "./ScatteredPhotos.module.css";

const PHOTOS = [
  { rotate: -8,  top: "5%",  left: "4%",   width: 240, label: null },
  { rotate:  5,  top: "2%",  left: "28%",  width: 200, label: null },
  { rotate: -3,  top: "8%",  left: "52%",  width: 270, label: "Silks" },
  { rotate:  9,  top: "2%",  left: "78%",  width: 190, label: null },
  { rotate: -6,  top: "48%", left: "14%",  width: 230, label: "Ozark Cirque" },
  { rotate:  4,  top: "44%", left: "42%",  width: 260, label: null },
  { rotate: -10, top: "42%", left: "68%",  width: 210, label: "Breathwork" },
  { rotate:  7,  top: "62%", left: "55%",  width: 240, label: null },
];

export default function ScatteredPhotos() {
  return (
    <section className={styles.section}>
      {PHOTOS.map((p, i) => (
        <div
          key={i}
          className={styles.polaroidWrapper}
          style={{ top: p.top, left: p.left }}
        >
          <div
            className={styles.polaroid}
            style={{
              width: p.width,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            {/* Image area */}
            <div className={styles.imgArea}>
              {/* Replace with <Image /> when you have real photos */}
              <span className={styles.imgLabel}>Photo</span>
            </div>
          </div>

          {p.label && (
            <span
              className={styles.floatingLabel}
              style={{ transform: `rotate(${p.rotate + 6}deg)` }}
            >
              {p.label}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
