import { getProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

type CardGridProps = {
  projects: Project[];
};

export default function CardGrid({ projects }: CardGridProps) {
  return (
    <div className="grid w-full gap-24">
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
