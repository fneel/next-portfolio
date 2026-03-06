import Link from "next/link";
import Image from "next/image";
import Button from "@/components/buttons/button";
import FancyButton from "@/components/buttons/fancyButton";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <header className="flex w-full pb-10 justify-center shadow">
        <div className="flex justify-between gap-10 container">
          <section className="flex basis-4/10 flex-col gap-12 justify-end p-6 ">
            <div>
              <h1 className="text-8xl uppercase">
                <span className="text-4xl">about</span>
                <br></br> elin eurenius
              </h1>
            </div>

            <FancyButton href="/contact">Connect</FancyButton>
          </section>

          <Image
            className="basis-6/10 p-6"
            alt=""
            src="/images/e_b_2.jpeg"
            width={300}
            height={250}
          ></Image>
        </div>
      </header>
      <main className="container mb-16">
        <section className="flex flex-col gap-10 w-xl p-6">
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lobortis augue eget augue fringilla volutpat. Praesent porttitor
            tristique gravida. In euismod nibh eu neque dignissim, vitae finibus
            velit dictum. Suspendisse ac faucibus lacus. Praesent quam ante,
            ornare ac sapien commodo, elementum tempus neque.{" "}
          </p>
          <p className="leading-7">
            Pellentesque a nisi malesuada, elementum nibh sed, pellentesque
            tellus. Fusce a pulvinar nulla, sed maximus nisl. Phasellus sem
            tortor, vehicula sit amet nisl sit amet, dignissim eleifend urna.
            Fusce mollis varius justo, non congue dui accumsan ut. Nam sit amet
            ante massa. Etiam in justo nisl. Fusce eget tincidunt enim. Aliquam
            vel interdum ligula. Suspendisse potenti. Donec suscipit leo in
            justo vestibulum cursus.
          </p>
          <p className="leading-7">
            Morbi quam dui, auctor sed porttitor eget, finibus nec mi. Sed sed
            tincidunt est. Integer scelerisque arcu in tristique ultrices.
            Integer luctus sem sit amet pellentesque faucibus.
          </p>
        </section>
      </main>
    </div>
  );
}
