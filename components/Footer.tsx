import Link from "next/link";
import Image from "next/image";
import LinkedinLink from "./social links/LinkedinLink";
import GitHubLink from "./social links/GitHubLink";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-50 w-full rounded-2xl py-6 flex border-2 border-neutral-950/80">
      <div className="container grid grid-cols-5 w-full mx-auto py-4 text-neutral-600 text-sm">
        <section className="flex flex-col gap-4 ">
          <div className="bg-accent w-12 h-12 rounded-full p-2 flex">
            <Image src="/el-in.png" alt="" height={50} width={50}></Image>
          </div>
          <p className="text-sm text-neutral-600 text-pretty">
            UX & Web Designer <br></br> based in Stockholm Sweden
          </p>
        </section>

        <section className="flex flex-col justify-evenly gap-2 col-span-2">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <div className="flex flex-row gap-4 items-center">
            <Mail width={15} height={15} />
            <a href="mailto:elineurenius@gmail.com">elineurenius@gmail.com</a>
          </div>
          <div className="w-12 flex gap-2">
            <LinkedinLink />
            <GitHubLink />
          </div>
        </section>

        <section className="justify-self-center col-span-2">
          <ul className="text-neutral-600 h-full flex flex-col justify-evenly">
            <li>
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
