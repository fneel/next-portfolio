import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 justify-between w-full">
      <section className="flex basis-4/10 flex-col p-6 ">
        <div>
          <h1 className="text-8xl">
            <span className="text-xl">small heading goes here</span>
            <br></br> & LARGE HEADING
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
  );
}
