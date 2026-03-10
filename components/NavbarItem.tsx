"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { ReactNode } from "react";

interface NavbarItemProps {
  href?: string;
  children?: ReactNode;
}

export default function NavbarItem({ href = "/", children }: NavbarItemProps) {
  const path = usePathname();

  return (
    <Link
      onClick={() =>
        sendGTMEvent({
          event: "navigation_click",
          navigation: path,
        })
      }
      href={href}
      className=""
    >
      {children}
    </Link>
  );
}
