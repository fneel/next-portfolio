"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

const GitHubLink = () => {
  const path = usePathname();

  return (
    <a
      onClick={() =>
        sendGTMEvent({
          event: "social_link",
          page_location: path,
        })
      }
      href="https://github.com/fneel"
      className="hover:scale-95 hover:opacity-90"
    >
      <Image src="/GitHub_White.png" height={40} width={40} alt=""></Image>
    </a>
  );
};

export default GitHubLink;
