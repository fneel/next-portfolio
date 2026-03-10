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
      className="hover:shadow-[0_0_25px_10px_rgba(210,_255,_31,_1)] hover:bg-[#d2ff1f] transition-all duration-200"
    >
      {children}
    </a>
  );
}
