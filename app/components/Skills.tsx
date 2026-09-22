import styles from "./Skills.module.css";

const skills = [
  {
    category: "Data & Analytics",
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI"],
  },
  {
    category: "Machine Learning",
    technologies: ["Scikit-learn", "OpenCV", "YOLO"],
  },
  {
    category: "Web Development",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind",
      "Node.js",
      "PHP",
      "Laravel",
      "Prisma",
      "Postgresql",
    ],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "Jupyter", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>02 — Skills</p>
          <h2>Tools I use to turn ideas into reality.</h2>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div className={styles.card} key={skill.category}>
              <h3>{skill.category}</h3>

              <div className={styles.technologies}>
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
