"use client";

import styles from "./SpinningCircle.module.css";

interface Props {
  text: string;
  size?: number;
  children?: React.ReactNode;
}

export default function SpinningCircle({ text, size = 110, children }: Props) {
  const chars = text.split("");
  const radius = size / 2 - 14;

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      {/* The ring div spins; each char is pre-rotated into position */}
      <div className={styles.ring} style={{ width: size, height: size }}>
        {chars.map((char, i) => {
          const angle = (i / chars.length) * 360;
          return (
            <span
              key={i}
              className={styles.char}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div className={styles.center}>
        {children ?? <span className={styles.arrow}>↓</span>}
      </div>
    </div>
  );
}
