import { getProjects, getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params; // 👈 detta är fixen

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="text-gray-500 mb-8">{project.myRole}</p>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="font-semibold">Concept</h2>
          <p>{project.projectConcept}</p>
        </div>

        <div>
          <h2 className="font-semibold">Problem</h2>
          <p>{project.backstoryProblem}</p>
        </div>

        <div>
          <h2 className="font-semibold">Solution</h2>
          <p>{project.currentSolution}</p>
        </div>

        <div>
          <h2 className="font-semibold">Results</h2>
          <p>{project.results}</p>
        </div>

        <div>
          <h2 className="font-semibold">Reflections</h2>
          <p>{project.reflections}</p>
        </div>
      </section>
    </main>
  );
}
