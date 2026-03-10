import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  const linkStyle =
    "hover:shadow-[0_0_25px_10px_rgba(210,_255,_31,_1)] hover:bg-[#d2ff1f] transition-all duration-200";

  return (
    <nav className="sticky h-15 top-0 left-0 z-50 w-full flex justify-center shadow-sm bg-mist-100">
      <div className="flex container items-center my-2 justify-between">
        <Link href="/" className="bg-[#D2FF1F] rounded-full">
          {" "}
          <Image
            className="h-12 w-auto"
            alt=""
            height={50}
            width={50}
            src="/el-in.png"
          ></Image>
        </Link>
        <ul className="flex min-w-1/3 justify-between [font-variant:small-caps] ">
          <li className="p-4">
            <Link id="navlink" href="/" className={linkStyle}>
              home
            </Link>
          </li>
          <li className="p-4">
            <Link id="navlink" href="/#projects" className={linkStyle}>
              work
            </Link>
          </li>
          <li className="p-4">
            <Link id="navlink" href="/about" className={linkStyle}>
              about
            </Link>
          </li>
          <li className="p-4">
            <Link id="navlink" href="/contact" className={linkStyle}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
