import styles from "./Certifications.module.css";

const certifications = [
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
  },
  {
    name: "Product Analytics",
    issuer: "Pendo",
  },
  {
    name: "IPVS Certification",
    issuer: "Matrix Comsec",
  },
];

export default function () {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>06 — Certifications</p>

          <h2>Continuous learning.</h2>
        </div>
        <div className={styles.list}>
          {certifications.map((certification, index) => (
            <article key={certification.name} className={styles.item}>
              <span className={styles.number}>0{index + 1}</span>
              <div>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
