import { getProjects, getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/buttons/goBackButton";

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
      <header className="w-full py-15 flex flex-col mx-auto justify-center shadow container">
        <BackButton />
        <div className="flex items-center content-between p-4">
          <div className=" flex flex-col items-start justify-center space-y-16 h-full mx-auto">
            <div>
              <p className="[font-variant:all-small-caps] text-neutral-400 text-sm ">
                {project.tags.join(" | ")}
              </p>
              <h1 className="uppercase text-6xl font-normal mb-4">
                <span className="text-neutral-400 text-6xl">project</span>{" "}
                <br></br>
                {project.title}
              </h1>
              {project.subTitle && (
                <p className="text-2xl font-normal">{project.subTitle}</p>
              )}
            </div>
            <p className="text-neutral-400">My role: {project.myRole}</p>
          </div>
          <div className=" p-4 mx-auto align-self-center">
            <Image
              className="basis-1/2 rounded-lg object-contain max-h-100"
              alt={project.title}
              src={project.coverImage || "/ph-cover-img.png"}
              width={600}
              height={400}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto container my-16 py-16">
        <section className="mx-auto space-y-12 grid gap-16 text-gray-700">
          {project.projectConcept && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                Project concept
              </h2>
              <p className=" columns-1 md:columns-2 lg:columns-3 gap-8 leading-relaxed">
                {project.projectConcept}
              </p>
            </div>
          )}

          {project.backstoryProblem && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                backstory & problem
              </h2>
              <p className="max-w-1/2 leading-relaxed">
                {project.backstoryProblem}
              </p>
            </div>
          )}

          {project.currentSolution && (
            <div className="grid gap-8">
              <div className="grid gap-8 border-l-2 px-4">
                <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                  current Solution
                </h2>
                <p>{project.currentSolution}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-6 items-center">
                {project.currentSolutionImages?.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt || ""}
                    width={800}
                    height={600}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {project.wireframesSketches && (
            <div className="grid gap-8">
              <div className="grid gap-8 border-l-2 px-4">
                <h2 className="lg:max-w-1/2 text-5xl font-semibold lowercase py-2">
                  wireframes & sketches
                </h2>
                <p>{project.wireframesSketches}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-6 items-center">
                {project.wireframesSketchesImages?.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt || ""}
                    width={800}
                    height={600}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {project.requirements && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                requirements
              </h2>
              <p className="max-w-1/2 leading-relaxed">
                {project.requirements}
              </p>
            </div>
          )}

          {project.toolsEnvironments && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                tools & environments
              </h2>
              <p className="max-w-1/2 leading-relaxed">
                {project.toolsEnvironments}
              </p>
            </div>
          )}

          {project.challenges && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                challenges
              </h2>
              <p className="max-w-1/2 leading-relaxed">{project.challenges}</p>
            </div>
          )}

          {project.resultsImages && (
            <div className="grid gap-8">
              <div className="grid gap-8 border-l-2 px-4">
                <h2 className="lg:max-w-1/2 text-5xl font-semibold lowercase py-2">
                  results
                </h2>
                <p>{project.results}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-6 items-center">
                {project.resultsImages?.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt || ""}
                    width={800}
                    height={600}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {project.reflections && (
            <div className="grid gap-8 border-l-2 px-4">
              <h2 className="lg:max-w-1/4 text-5xl font-semibold lowercase py-2">
                Reflections
              </h2>
              <p className="max-w-1/2 leading-relaxed">{project.reflections}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
