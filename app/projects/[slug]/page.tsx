import { projects } from "@/data/Project";
import ProjectDetails from "@/app/components/ProjectDetails";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return <ProjectDetails project={project} />;
}
