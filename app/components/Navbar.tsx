import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          <img src="/favicon.ico" alt="TJ logo" className={styles.logoIcon} />

          <span>TABOT'S PORTFOLIO</span>
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
