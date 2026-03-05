import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export default function ProjectCard({
  project,
  reversed = false, //false by default, the logic in CardGrid determines which ones will be reversed
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={`
          flex items-center gap-6 w-full h-xl rounded-xl p-6 
          hover:shadow-xl transition cursor-pointer
          ${reversed ? "flex-row-reverse" : "flex-row"}
        `}
      >
        <div className="px-4 basis-1/2 gap-8 flex flex-col">
          <div className="flex flex-wrap gap-2 top-0  self-start">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-zinc-300 px-3 py-1 rounded-full [font-variant:all-small-caps]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col text-balance">
            <h2 className="text-4xl font-normal uppercase mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-gray-500 mb-4">{project.myRole}</p>

            <p className="text-gray-700 line-clamp-3 my-2">
              {project.projectConcept}
            </p>
          </div>

          <button
            className="bg-neutral-900 text-sm text-white px-8 py-2 rounded-4xl h-fit w-fit"
            type="button"
          >
            See more
          </button>
        </div>

        <div>
          <Image
            className="basis-1/2 rounded-lg object-contain max-h-100"
            alt={project.title}
            src={project.coverImage || "/el-in.png"}
            width={600}
            height={400}
          />
        </div>
      </div>
    </Link>
  );
}
