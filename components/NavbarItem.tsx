"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

import { ReactNode } from "react";

interface NavbarItemProps {
  href?: string;
  children?: ReactNode;
}

export default function NavbarItem({ href = "/", children }: NavbarItemProps) {
  const path = usePathname();

  return (
    <a
      onClick={() =>
        sendGTMEvent({
          event: "navlink_click",
          navigation: path,
        })
      }
      href={href}
      className="hover:shadow-[0_0_35px_-6px_rgba(105,_120,_255,_1)] hover:bg-accent/5 px-2 rounded-full transition-all duration-100"
    >
      {children}
    </a>
  );
}
