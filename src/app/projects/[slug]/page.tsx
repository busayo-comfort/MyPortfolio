import ProjectDetail from "@/components/projects/projectDetails";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  // ProjectDetail component will consume all of this
  return <ProjectDetail project={project} />;
}