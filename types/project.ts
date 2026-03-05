import { ProjectTag } from "./tags";

export interface Project {
  id: string;
  title: string;
  myRole: string;
  subTitle: string;
  projectConcept: string;
  backstoryProblem: string;
  requirements: string;
  toolsEnvironments: string;
  currentSolution: string;
  wireframesSketches: string;
  challenges: string;
  results: string;
  reflections: string;

  tags: string[];
}
