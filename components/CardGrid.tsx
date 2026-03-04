import { getProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function CardGrid() {
  const projects = getProjects();

  return (
    <div className="grid w-full gap-6 sm:grid-cols-1 lg:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
