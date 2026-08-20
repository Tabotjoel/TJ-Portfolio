import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectDetails.module.css";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  image: string;
  year: string;
  overview: string;
  problem: string;
  process: string[];
  insights: string[];
  links: {
    github: string;
    dashboard: string;
    live: string;
  };
};

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.back}>
          ← Back to projects
        </Link>

        <header className={styles.header}>
          <p>{project.category}</p>

          <h1>{project.title}</h1>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.meta}>
            <span>{project.year}</span>

            <div className={styles.technologies}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <p className={styles.label}>01 — Overview</p>

          <h2>What this project is about</h2>

          <p>{project.overview}</p>
        </section>

        <section className={styles.section}>
          <p className={styles.label}>02 — Problem</p>

          <h2>The problem</h2>

          <p>{project.problem}</p>
        </section>

        <section className={styles.section}>
          <p className={styles.label}>03 — Process</p>

          <h2>How I approached it</h2>

          <div className={styles.list}>
            {project.process.map((step, index) => (
              <div key={step} className={styles.listItem}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.label}>04 — Insights</p>

          <h2>What I discovered</h2>

          <div className={styles.list}>
            {project.insights.map((insight, index) => (
              <div key={insight} className={styles.listItem}>
                <span>0{index + 1}</span>
                <p>{insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.placeholder}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={`${project.title} dashboard`}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.links}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            )}

            {project.links.dashboard && (
              <a
                href={project.links.dashboard}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Dashboard →
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project →
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
