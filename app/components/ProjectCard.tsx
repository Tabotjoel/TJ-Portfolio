import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span>{project.category}</span>
        <span>0{project.id}</span>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <Link href={`/projects/${project.slug}`} className={styles.link}>
        View Project →
      </Link>
    </article>
  );
}
