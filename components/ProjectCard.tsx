import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="flex justify-between items-center bg-none w-full shadow-md rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
        <div className="p-6 basis-1/2">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

          <p className="text-sm text-gray-500 mb-4">{project.myRole}</p>

          <p className="text-gray-700 line-clamp-3">{project.projectConcept}</p>
        </div>

        <Image
          className="basis-1/2 p-2 pr-0"
          alt=""
          src={"https://picsum.photos/300/200"}
          width={300}
          height={250}
        ></Image>
      </div>
    </Link>
  );
}
