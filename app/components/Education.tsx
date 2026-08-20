import styles from "./Education.module.css";

const education = [
  {
    year: "Postgraduate",
    degree: "Data Science",
    description:
      "Postgraduate studies focused on data science, analytics, and practical application of data-driven techniques.",
  },
  {
    year: "Degree",
    degree: "Computer Engineering",
    description:
      "Bachelor's degree in Computer Engineering, providing a foundation in software development, computing systems, and engineering principles.",
  },
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>05 — Education</p>

          <h2>
            Where I&apos;ve
            <br />
            learned.
          </h2>
        </div>

        <div className={styles.educationList}>
          {education.map((item) => (
            <article
              key={`${item.year}-${item.degree}`}
              className={styles.item}
            >
              <span className={styles.year}>{item.year}</span>

              <div>
                <h3>{item.degree}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
