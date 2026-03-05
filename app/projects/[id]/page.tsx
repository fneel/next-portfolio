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
  const { id } = await params;

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full ">
      <header className="bg-zinc-800 text-zinc-300 h-100 w-full px-2 mx-0">
        <div className="container flex flex-col items-start justify-end space-y-16 h-full mx-auto">
          <div>
            <h1 className="uppercase text-6xl font-normal mb-4">
              <span className="text-neutral-400 text-6xl">project</span>{" "}
              <br></br>
              {project.title}
            </h1>

            <p className="text-2xl font-normal">{project.subTitle}</p>
          </div>
          <p className="text-neutral-400 mb-8">{project.myRole}</p>
        </div>
      </header>

      <main className="mx-auto container py-16">
        <section className="mx-auto space-y-12 grid gap-8 text-gray-700">
          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              Project concept
            </h2>
            <p className=" columns-1 md:columns-2 lg:columns-3 gap-8 leading-relaxed">
              {project.projectConcept}
            </p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              backstory & problem
            </h2>
            <p className="max-w-1/2 leading-relaxed">
              {project.backstoryProblem}
            </p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              current Solution
            </h2>
            <p>{project.currentSolution}</p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              requirements
            </h2>
            <p className="max-w-1/2 leading-relaxed">{project.requirements}</p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              tools & environments
            </h2>
            <p className="max-w-1/2 leading-relaxed">
              {project.toolsEnvironments}
            </p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              challenges
            </h2>
            <p className="max-w-1/2 leading-relaxed">{project.challenges}</p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              Results
            </h2>
            <p className="max-w-1/2 leading-relaxed">{project.results}</p>
          </div>

          <div className="grid gap-8 border-l-2 px-4">
            <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
              Reflections
            </h2>
            <p className="max-w-1/2 leading-relaxed">{project.reflections}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
