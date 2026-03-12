import Image from "next/image";
import Link from "next/link";
import NavbarItem from "./NavbarItem";

export default function MainNav() {
  return (
    <nav className="sticky h-15 top-0 left-0 z-50 w-full flex justify-center shadow-lg/5 bg-mist-100">
      <div className="flex mx-4 container items-center my-2 justify-between">
        <Link href="/" className="bg-[#D2FF1F] rounded-full">
          <Image
            className="h-12 w-auto"
            alt=""
            height={50}
            width={50}
            src="/el-in.png"
          />
        </Link>
        <ul className="flex min-w-1/3 justify-between [font-variant:small-caps] ">
          <li className="p-4">
            <NavbarItem href="/#home">home</NavbarItem>
          </li>
          <li className="p-4">
            <NavbarItem href="/#projects">work</NavbarItem>
          </li>
          <li className="p-4">
            <NavbarItem href="/about">about</NavbarItem>
          </li>
          <li className="p-4">
            <NavbarItem href="/contact">contact</NavbarItem>
          </li>
        </ul>
      </div>
    </nav>
  );
}
