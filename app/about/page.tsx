import Link from "next/link";
import Image from "next/image";
import Button from "@/components/buttons/button";
import FancyButton from "@/components/buttons/fancyButton";
import FancyButtonVar from "@/components/buttons/fancyButtonVar";

export default function About() {
  return (
    <div className="w-full grid gap-50">
      <header className="flex w-full h-full my-8 py-8 justify-center shadow mx-auto">
        <div className="flex justify-between gap-10 container">
          <section className="flex basis-5/10 flex-col gap-12 justify-end p-6 ">
            <div>
              <h1 className="text-8xl uppercase">
                <span className="text-4xl">about</span>
                <br></br> elin eurenius
              </h1>
            </div>

            <FancyButtonVar glowColor="#9cb0ff" textMode="dark" href="/contact">
              Connect
            </FancyButtonVar>
          </section>

          <Image
            className="basis-5/10 object-contain max-h-130"
            alt=""
            src="/images/e-c-blue.png"
            width={600}
            height={900}
          ></Image>
        </div>
      </header>

      <main className="container w-full mb-16 mx-auto">
        <section className="grid gap-60 w-fit p-6 mx-auto container">
          <section className="grid gap-6 w-fit">
            <h2 className="text-6xl">Intro</h2>
            <p className="leading-7 max-w-155 text-pretty">
              Jag arbetar i gränslandet mellan design, teknik och kommunikation.
              Min styrka ligger i att skapa digitala lösningar som inte bara ser
              bra ut, utan också fungerar i praktiken – för användare, företag
              och organisationer. Jag arbetar med webbutveckling, UX-design,
              digital design och digital kommunikation. Det innebär att jag både
              kan utveckla webbplatser, designa användarupplevelser och hjälpa
              organisationer att kommunicera tydligare i digitala kanaler. I
              många projekt fungerar jag som en brygga mellan strategi, design
              och utveckling. Jag är van vid att ta en idé från koncept till
              färdig lösning och att arbeta nära både beställare och användare
              för att skapa något som faktiskt används.
            </p>
          </section>
          <section className="grid gap-6 justify-self-end w-fit">
            <h2 className="text-6xl">Background</h2>

            <p className="leading-7 max-w-155 text-pretty">
              Min bakgrund är bred inom kommunikation, design och digital
              utveckling, vilket gör att jag ofta arbetar i projekt där flera
              kompetenser behöver mötas. Under åren har jag arbetat med allt
              från webbplatser och digitala tjänster till innehållsproduktion
              och sociala medier. Det har gett mig en god förståelse för hur
              design, teknik och kommunikation samverkar i digitala produkter.
              Jag har även arbetat med projekt där innovation, entreprenörskap
              och digitala tjänster varit centrala. Den typen av arbete har
              gjort mig van vid att snabbt sätta mig in i nya problem, analysera
              behov och ta fram lösningar som fungerar i verkliga sammanhang. I
              dag fokuserar jag på att hjälpa företag och organisationer att
              utveckla tydliga, användarvänliga och funktionella digitala
              lösningar.
            </p>
          </section>

          <section className="grid h-full">
            <div className="flex w-full flex-col items-center justify-center gap-6 p-6 lg:flex-row lg:gap-0">
              <div className="relative flex  w-fit items-center sm:text-left lg:text-right lg:justify-end">
                <div className=" lg:pr-6 ">
                  <h2 className="text-6xl ">What I do</h2>
                </div>
                <div className="top-1/2 mt-px hidden h-px w-16 bg-accent lg:block"></div>
              </div>

              <ul className=" max-w-200">
                <li className="group relative py-6">
                  <div className="absolute inset-0 hidden w-px bg-accent group-first:top-1/2 group-last:bottom-1/2 lg:block"></div>
                  <div className="items-center gap-6 lg:flex">
                    <div className="relative mb-4 lg:mb-0 lg:pl-16">
                      <div className="absolute left-0 top-1/2 hidden h-px w-full bg-accent lg:block"></div>
                      <div className="relative grid h-24 w-24 rounded-full border border-solid border-accent bg-neutral-900">
                        <svg
                          className="m-auto block h-full max-h-12 w-full"
                          fill="none"
                          height="15"
                          width="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M6.0068 13.4178L8.0068 1.4178L8.9932 1.5822L6.9932 13.5822L6.0068 13.4178ZM5.20711 4.5L2.20711 7.5L5.20711 10.5L4.5 11.2071L0.792892 7.5L4.5 3.79289L5.20711 4.5ZM10.5 3.79289L14.2071 7.5L10.5 11.2071L9.79289 10.5L12.7929 7.5L9.79289 4.5L10.5 3.79289Z"
                            fill="white"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-2xl ">Webbutveckling</h3>
                      <p className="opacity-75">
                        Jag utvecklar webbplatser och digitala plattformar med
                        fokus på funktion, prestanda och användarvänlighet. Jag
                        arbetar både med struktur, layout och implementation för
                        att skapa stabila och skalbara lösningar.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group relative py-6">
                  <div className="absolute inset-0 hidden w-px bg-accent group-first:top-1/2 group-last:bottom-1/2 lg:block"></div>
                  <div className="items-center gap-6 lg:flex">
                    <div className="relative mb-4 lg:mb-0 lg:pl-16">
                      <div className="absolute left-0 top-1/2 hidden h-px w-full bg-accent lg:block"></div>
                      <div className="relative grid h-24 w-24 rounded-full border border-solid border-accent bg-neutral-900">
                        <svg
                          className="m-auto block h-full max-h-12 w-full"
                          fill="none"
                          height="15"
                          width="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M6.0068 13.4178L8.0068 1.4178L8.9932 1.5822L6.9932 13.5822L6.0068 13.4178ZM5.20711 4.5L2.20711 7.5L5.20711 10.5L4.5 11.2071L0.792892 7.5L4.5 3.79289L5.20711 4.5ZM10.5 3.79289L14.2071 7.5L10.5 11.2071L9.79289 10.5L12.7929 7.5L9.79289 4.5L10.5 3.79289Z"
                            fill="white"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-2xl">UX och digital design</h3>
                      <p className="opacity-75">
                        Jag designar gränssnitt och användarupplevelser som gör
                        digitala tjänster enklare att förstå och använda. Det
                        kan handla om wireframes, prototyper, designsystem eller
                        färdig UI-design.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group relative py-6">
                  <div className="absolute inset-0 hidden w-px bg-accent group-first:top-1/2 group-last:bottom-1/2 lg:block"></div>
                  <div className="items-center gap-6 lg:flex">
                    <div className="relative mb-4 lg:mb-0 lg:pl-16">
                      <div className="absolute left-0 top-1/2 hidden h-px w-full bg-accent lg:block"></div>
                      <div className="relative grid h-24 w-24 rounded-full border border-solid border-accent bg-neutral-900">
                        <svg
                          className="m-auto block h-full max-h-12 w-full"
                          fill="none"
                          height="15"
                          width="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M6.0068 13.4178L8.0068 1.4178L8.9932 1.5822L6.9932 13.5822L6.0068 13.4178ZM5.20711 4.5L2.20711 7.5L5.20711 10.5L4.5 11.2071L0.792892 7.5L4.5 3.79289L5.20711 4.5ZM10.5 3.79289L14.2071 7.5L10.5 11.2071L9.79289 10.5L12.7929 7.5L9.79289 4.5L10.5 3.79289Z"
                            fill="white"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-2xl">Digital kommunikation</h3>
                      <p className="opacity-75">
                        Jag hjälper organisationer att kommunicera tydligt i
                        digitala kanaler genom design, innehåll och strategi.
                        Det kan inkludera sociala medier, innehållsproduktion
                        och struktur för webbplatser.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="grid gap-16 mx-auto">
            <h2 className="text-6xl">
              <i>How</i> I do it
            </h2>
            <ul className="grid grid-flow-col grid-rows-3 gap-8 w-full text-foreground/50">
              <li className="w-xl text-balance grid gap-4">
                <h3 className="text-2xl text-foreground">
                  1. Förstå problemet
                </h3>
                <p>
                  Jag börjar alltid med att förstå mål, användare och kontext.
                  Det kan innebära research, analys av befintliga lösningar och
                  dialog med beställare.
                </p>
              </li>
              <li className="w-xl text-balance grid gap-4">
                <h3 className="text-2xl text-foreground">
                  2. Struktur och koncept
                </h3>
                <p>
                  Därefter arbetar jag med struktur, informationsarkitektur och
                  koncept för att definiera hur lösningen ska fungera.
                </p>
              </li>
              <li className="w-xl text-balance grid gap-4">
                <h3 className="text-2xl text-foreground">
                  3. Design och prototyp
                </h3>
                <p>
                  Nästa steg är att utveckla design och interaktioner genom
                  wireframes, prototyper och visuella gränssnitt.
                </p>
              </li>
              <li className="w-xl text-balance grid gap-4">
                <h3 className="text-2xl text-foreground">
                  4. Utveckling och implementering
                </h3>
                <p>
                  När designen är klar går arbetet över i utveckling, där fokus
                  ligger på prestanda, tillgänglighet och responsiv design.
                </p>
              </li>
              <li className="w-xl text-balance grid gap-4">
                <h3 className="text-2xl text-foreground">
                  5. Test och förbättring
                </h3>
                <p>
                  Efter lansering fortsätter arbetet ofta med analys och
                  förbättringar baserat på användning och feedback.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-5xl">Skills</h2>
          </section>
        </section>
      </main>
    </div>
  );
}
