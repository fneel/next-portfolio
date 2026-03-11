"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

const LinkedinLink = () => {
  const path = usePathname();

  return (
    <a
      onClick={() =>
        sendGTMEvent({
          event: "social_link",
          page_location: path,
        })
      }
      href="https://www.linkedin.com/in/elineurenius/"
      className=""
    >
      <Image src="/InBug-Black.png" height={40} width={40} alt=""></Image>
    </a>
  );
};

export default LinkedinLink;
