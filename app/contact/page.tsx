import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import GradientBackground from "@/components/GradientSvg";
import GitHubLink from "@/components/social links/GitHubLink";

export default function Contact() {
  return (
    <div className="w-full flex justify-center min-h-200">
      <section className="flex gap-12 h-full w-1/2 justify-center flex-col p-6 ">
        <div>
          <h1 className="text-8xl uppercase">contact</h1>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row gap-4">
            <Mail />
            <a href="mailto:emailhej@mailadress.com">mail@mailme.nu</a>
          </div>

          <div className="flex flex-row gap-4">
            <Phone />
            <a href="tel:+46789 45 61 23">+46789 45 61 23</a>
          </div>
          <div className="flex gap-6">
            <Image src="/InBug-Black.png" height={40} width={40} alt=""></Image>
            <Image
              src="/GitHub_Black.png"
              height={40}
              width={40}
              alt=""
            ></Image>
            <GitHubLink />
          </div>
        </div>
      </section>
      <section className="">
        <GradientBackground className=""></GradientBackground>
      </section>
    </div>
  );
}
