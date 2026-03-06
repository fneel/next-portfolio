export interface ProjectImage {
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  myRole: string;
  subTitle?: string;
  projectConcept: string;
  backstoryProblem: string;
  requirements: string;
  toolsEnvironments: string;

  currentSolution: string;
  currentSolutionImages?: ProjectImage[];

  wireframesSketches: string;
  wireframesSketchesImages?: ProjectImage[];

  challenges: string;

  results: string;
  resultsImages?: ProjectImage[];

  reflections: string;

  tags: string[];
  coverImage?: string;
}
