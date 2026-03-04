import Image from "next/image";
import Link from "next/link";
import CardGrid from "@/components/CardGrid";

export default function Home() {
  return (
    <div className="w-full">
      <header className="w-full flex justify-center shadow">
        <div className="flex gap-10 justify-between container">
          <section className="flex basis-4/10 flex-col p-6 ">
            <div>
              <h1 className="text-8xl uppercase">
                <span className="text-xl">
                  portfolio:
                  <b> elin eurenius</b>
                </span>
                <br></br> ux & web designer
              </h1>
            </div>

            <div className="flex justify-between mb-0 mt-auto">
              <Link href={"/"}>
                <Image
                  alt=""
                  src={"https://picsum.photos/300/300"}
                  width={200}
                  height={200}
                ></Image>
              </Link>
              <Link href={"/"}>
                <Image
                  alt=""
                  src={"https://picsum.photos/300/300"}
                  width={200}
                  height={200}
                ></Image>
              </Link>
            </div>
          </section>

          <Image
            className="basis-6/10 p-6"
            alt=""
            src={"https://picsum.photos/300/250"}
            width={300}
            height={250}
          ></Image>
        </div>
      </header>

      <main className="my-16 mx-auto container px-6 py-16">
        <div className="mb-16">
          <h1 className="text-6xl font-normal uppercase my-8 ">My Work</h1>
          <p className="text-lg">
            Have a look at some of the projects i have been working with
          </p>
        </div>
        <CardGrid />
      </main>
    </div>
  );
}
