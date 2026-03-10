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
          event: "github_link",
          page_location: path,
        })
      }
      href="https://github.com/fneel"
      className=""
    >
      <Image src="/GitHub_Black.png" height={40} width={40} alt=""></Image>
    </a>
  );
};

export default GitHubLink;
