import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import GradientBackground from "@/components/GradientSvg";
import GitHubLink from "@/components/social links/GitHubLink";
import LinkedinLink from "@/components/social links/LinkedinLink";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center min-h-full">
      <main className="container mb-16 py-20">
        <div className="flex flex-row container justify-between mx-auto">
          <section className="flex gap-12 justify-center flex-col p-6 ">
            <div>
              <h1 className="text-8xl uppercase">contact</h1>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-row gap-4">
                <Mail />
                <a
                  href="mailto:emailhej@mailadress.com"
                  className="hover:text-foreground/80"
                >
                  elineurenius@gmail.com
                </a>
              </div>

              {/* <div className="flex flex-row gap-4">
            <Phone />
            <a href="tel:+46789 45 61 23">+46789 45 61 23</a>
          </div> */}
              <div className="flex gap-6">
                <LinkedinLink />
                <GitHubLink />
              </div>
            </div>
          </section>
          {/*  <section className="">
            <GradientBackground className=""></GradientBackground>
          </section> */}
        </div>
      </main>
    </div>
  );
}
