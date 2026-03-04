import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="sticky h-15 top-0 left-0 z-50 w-full flex justify-center shadow-sm bg-mist-100">
      <div className="flex container items-center my-2 justify-between">
        <Link href="/">
          {" "}
          <Image
            className="h-12 w-auto"
            alt=""
            height={50}
            width={50}
            src="/el-in.png"
          ></Image>
        </Link>
        <ul className="flex min-w-1/3 justify-between">
          <li className="p-4">
            <Link href="/">work</Link>
          </li>
          <li className="p-4">
            <Link href="/about">about</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
