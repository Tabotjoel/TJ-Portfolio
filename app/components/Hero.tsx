import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.intro}>Hello, I&apos;m</p>

          <h1>
            Tabot <span>Joel</span>
          </h1>

          <h2>
            Data Scientist <span>·</span> Data Analyst <span>·</span> Software
            Engineer
          </h2>

          <p className={styles.description}>
            I turn data into meaningful insights and build technology that
            solves real-world problems.
          </p>

          <div className={styles.actions}>
            <Link href="#projects" className={styles.primaryButton}>
              View My Work
            </Link>

            <Link href="#contact" className={styles.secondaryButton}>
              Let's Connect
            </Link>

            <Link
              href="/Tabot_Joel_Ebangha_Resume.pdf"
              className={styles.primaryButton}
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
