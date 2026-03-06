import projects from "./projects.json";
import { Project } from "@/types/project";

export function getProjects(): Project[] {
  return projects as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
