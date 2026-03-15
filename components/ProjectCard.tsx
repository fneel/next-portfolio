import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
          backdrop-blur-[15px]
          bg-accent-soft/2
         border-t border-accent/10
          hover:border-t-accent/30
          hover:scale-102
          w-full
          shadow-[0_15px_15px_rgba(0,0,0,0.1)] 
          flex 
          items-center 
          gap-6 container mx-auto justify-center h-xl rounded-xl p-6 
          hover:shadow-[0_15px_15px_rgba(0,0,0,0.2)] transition-all duration-100 cursor-pointer
          ${reversed ? "flex-row-reverse" : "flex-row"}
        `}
      >
        <div className="px-4 basis-1/2 gap-8 flex flex-col text-foreground">
          <div className="flex flex-wrap gap-2 top-0  self-start">
            <p className="[font-variant:all-small-caps] text-foreground/50 text-sm ">
              {project.tags.join(" | ")}
            </p>
          </div>
          <div className="flex flex-col text-balance">
            <h2 className="text-4xl font-normal uppercase mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-foreground/30 mb-4">{project.myRole}</p>

            <p className="font-normal text-foreground/80 line-clamp-3 my-2 w-md tracking-wide">
              {project.projectConcept}
            </p>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <span className="font-medium text-neutral-600 ">See more</span>
            <ArrowRight className="text-neutral-600 h-4" />
          </div>
        </div>

        <div className="w-md">
          <Image
            className="shadow-[0px_0px_22px_-5px_rgba(0,_0,_0,_0.1)] basis-1/2 rounded-lg object-cover max-h-100"
            alt={project.title}
            src={project.coverImage || "/ph-img.png"}
            width={600}
            height={400}
          />
        </div>
      </div>
    </Link>
  );
}
