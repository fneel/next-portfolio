import Image from "next/image";
import Link from "next/link";
import FancyButtonVar from "@/components/buttons/fancyButtonVar";
import ProjectsSection from "@/components/ProjectSection";
import rawProjects from "@/data/projects.json";
import { Project } from "@/types/project";
import Button from "@/components/buttons/button";

const projects = rawProjects as Project[];

export default function Home() {
  return (
    <div className="w-full grid grid-flow-row auto-rows-max gap-36" id="home">
      <header className="w-full flex justify-center h-full py-20">
        <div className="flex gap-10 justify-between container md:w-full sm:w-full">
          <section className="flex basis-1/2 flex-col justify-end p-6 ">
            <div>
              <h1 className="text-8xl uppercase">
                <span className="text-xl">
                  <b>portfolio:</b>

                  <i> elin eurenius</i>
                </span>
                <br></br>ux & web designer
              </h1>
            </div>

            <div className="py-6 mb-4 mt-12">
              <FancyButtonVar
                glowColor="#9cb0ff"
                textMode="dark"
                href="#projects"
              >
                My work
              </FancyButtonVar>
            </div>
          </section>

          {/* <div
            className="basis-2/5 max-h-200 rounded-4xl backdrop-blur-[15px]
          bg-black/5
          border-t border-white/10
          
          shadow-[0_15px_15px_rgba(0,0,0,0.3)]
          overflow-hidden
          transition-all duration-500
          group-hover:tracking-[3px]"
          >
            <Image
              className="object-center object-cover w-full h-full"
              alt=""
              src="/images/e2.png"
              width={300}
              height={300}
            ></Image>
          </div> */}

          <div className="basis-1/2 max-h-200 p-6">
            <Image
              className="object-center object-cover w-full h-full md:p-8"
              alt=""
              src="/images/grid-h.png"
              width={800}
              height={1200}
            ></Image>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full grid grid-flow-row auto-rows-max gap-26 my-12">
        <section className="flex flex-1 items-end w-full h-auto p-8 gap-6 bg-cover bg-center bg-no-repeat mx-auto max-w-400 md:flex-row md:max-h-100">
          <div className=" basis-2/3 flex flex-col gap-8 w-2xl container text-pretty justify-center p-4 rounded-lg px-16 ">
            <h2 className="text-6xl">Hello</h2>
            <p className="text-lg tracking-wide font-normal py-2 w-xl text-foreground/80">
              I work at the intersection of design, technology, and
              communication. My strength lies in creating digital solutions that
              not only look good, but also work effectively in practice.
            </p>

            <FancyButtonVar glowColor="#9cb0ff" textMode="dark" href="/about">
              Get resume
            </FancyButtonVar>
          </div>
          <Image
            className="w-1/2"
            src="/images/grid.png"
            alt=""
            height={200}
            width={200}
          ></Image>
        </section>

        <section id="projects" className="my-12 container mx-auto p-6">
          <section>
            <div className="my-8 flex flex-col justify-center">
              <h1 className="text-6xl font-normal uppercase mb-2">
                My <i>Work</i>
              </h1>
              <p className="text-lg"></p>
            </div>
          </section>

          <ProjectsSection projects={projects} />
        </section>
      </main>
    </div>
  );
}
