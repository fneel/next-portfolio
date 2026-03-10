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
    <div className="w-full" id="home">
      <header className="w-full py-15 flex justify-center ">
        <div className="flex gap-10 justify-between container md:w-full sm:w-full">
          <section className="flex basis-3/5 flex-col justify-end p-6 ">
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
            className="basis-2/5 object-center p-6 object-cover"
            alt=""
            src="/images/e_b_1.jpeg"
            width={300}
            height={250}
          ></Image>
        </div>
      </header>

      <main className="my-8 mx-auto container px-6 py-8">
        <section className="flex py-12 mx-auto my-8 container items-center  w-full gap-6 justify-center">
          <div className="basis-1/2 border border-neutral-300 m-4">
            <Image
              className="w-full h-auto object-cover"
              src="/ph-cover.png"
              alt=""
              height={100}
              width={200}
            ></Image>
          </div>

          <div className=" basis-1/2 flex flex-col gap-8 w-2xl container text-pretty justify-center p-12 rounded-lg ">
            <h2 className="text-6xl w-fit mb-8 rounded-full bg-[#d2ff1fc4] shadow-[-20px_-20px_60px_32px_rgba(210,_255,_31,_1)]">
              Hi
            </h2>
            <p className="text-lg font-normal py-2 mb-4">
              Praesent hendrerit at mauris at cursus. Morbi sodales nunc
              molestie magna scelerisque, et mattis mi hendrerit. Nunc eu augue
              quis sem tempor pellentesque. Nam accumsan magna id facilisis
              ultricies. Donec mattis sem urna, eget vehicula diam malesuada
              nec.{" "}
            </p>

            <Button variant="primary" href="/about">
              About me
            </Button>
          </div>
        </section>

        <section id="projects" className="">
          <section>
            <div className="h-80 flex flex-col justify-center">
              <h1 className="text-6xl font-normal uppercase my-8">My Work</h1>
              <p className="text-lg">Have a look at some of my work</p>
            </div>
          </section>

          <ProjectsSection projects={projects} />
        </section>
      </main>
    </div>
  );
}
