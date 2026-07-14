"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import styles from "./Nav.module.css";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const pageName = () => {
    if (pathname === "/about") return "ABOUT";
    if (pathname === "/work") return "WORK";
    if (pathname === "/contact") return "CONTACT";
    if (pathname.startsWith("/work/")) return "WORK";
    return "";
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        {/* Left: name + current page */}
        <div className={styles.left}>
          <Link href="/" className={styles.name}>
            OZARK CIRQUE
          </Link>
          {pageName() && (
            <>
              <span className={styles.dot}>●</span>
              <span className={styles.page}>{pageName()}</span>
            </>
          )}
        </div>

        {/* Right: get in touch + toggle + hamburger */}
        <div className={styles.right}>
        <Link href="/contact" className={styles.getInTouch}>
  → GET IN TOUCH
</Link>

          <button
            onClick={toggle}
            className={styles.themeToggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "○" : "●"}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={styles.hamburger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className={styles.closeX}>✕</span>
            ) : (
              <span className={styles.bars}>
                <span />
                <span />
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown overlay */}
      <div className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ""}`}>
        {[
          { label: "HOME", href: "/" },
          { label: "ABOUT", href: "/about" },
          { label: "WORK", href: "/work" },
          { label: "CONTACT", href: "/contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={styles.dropdownLink}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
