import Image from "next/image";
import Link from "next/link";
import FancyButtonVar from "@/components/buttons/fancyButtonVar";
import ProjectsSection from "@/components/ProjectSection";
import rawProjects from "@/data/projects.json";
import { Project } from "@/types/project";

const projects = rawProjects as Project[];

export default function Home() {
  return (
    <div className="w-full">
      <header className="w-full flex justify-center shadow">
        <div className="flex gap-10 justify-between container">
          <section className="flex basis-4/10 flex-col justify-end p-6 ">
            <div>
              <h1 className="text-8xl uppercase">
                <span className="text-xl">
                  portfolio:
                  <b> elin eurenius</b>
                </span>
                <br></br> ux & web designer
              </h1>
            </div>

            <div className="py-6 mb-4 mt-12">
              <FancyButtonVar glowColor="#d2ff1f" href="/contact">
                Connect
              </FancyButtonVar>
            </div>
          </section>

          <Image
            className="basis-6/10 p-6"
            alt=""
            src="/images/e_b_1.jpeg"
            width={300}
            height={250}
          ></Image>
        </div>
      </header>

      <main className="my-16 mx-auto container px-6 py-16">
        <section id="projects">
          <div className="h-80 flex flex-col justify-center">
            <h1 className="text-6xl font-normal uppercase my-8 ">My Work</h1>
            <p className="text-lg">
              Have a look at some of the projects i have been working with
            </p>
          </div>
        </section>

        <ProjectsSection projects={projects} />
      </main>
    </div>
  );
}
