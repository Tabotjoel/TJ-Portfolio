import styles from "./Experience.module.css";

const experiences = [
  {
    year: "—",
    title: "Web Developer",
    company: "Swiftech",
    description:
      "Built responsive web applications using React and Laravel, optimized MySQL queries to improve data processing efficiency, and implemented Git-based workflows to support team collaboration.",
  },
  {
    year: "—",
    title: "Technical Intern",
    company: "Promedia SARL",
    description:
      "Executed hardware and software integration work to improve system reliability, applied Matrix Comsec protocols to strengthen security system infrastructure, and contributed to reducing system downtime through structured troubleshooting and performance optimization.",
  },
];
export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>04 — Experience</p>

          <h2>
            Where I've
            <br />
            worked.
          </h2>
        </div>
        <div className={styles.timeline}>
          {experiences.map((experience) => (
            <article
              key={`${experience.year}-${experience.title}`}
              className={styles.item}
            >
              <span className={styles.year}>{experience.year}</span>

              <div>
                <h3>{experience.title}</h3>
                <p className={styles.company}>{experience.company}</p>

                <p className={styles.description}>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
