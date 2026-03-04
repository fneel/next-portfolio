import { getProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function CardGrid() {
  const projects = getProjects();

  return (
    <div className="grid w-full gap-12">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reversed={index % 2 !== 0} //every second object will display as reversed
        />
      ))}
    </div>
  );
}
