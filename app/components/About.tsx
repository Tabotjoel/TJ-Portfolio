import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>01 — About</p>

          <h2>
            Building with data.
            <br />
            Thinking like an engineer.
          </h2>

          <div className={styles.photoWrapper}>
            <Image
              src="/images/profile.jpg"
              alt="Tabot Joel"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className={styles.content}>
          <p>
            I&apos;m a Data Science postgraduate student with a background in
            Computer Engineering. I enjoy working at the intersection of data,
            technology, and problem solving.
          </p>

          <p>
            My work involves analysing data, creating meaningful visualisations,
            developing machine learning solutions, and building software that
            turns ideas into useful products.
          </p>

          <p>
            I&apos;m continuously learning, building projects, and looking for
            opportunities where I can use technology to solve real-world
            problems.
          </p>
        </div>
      </div>
    </section>
  );
}
