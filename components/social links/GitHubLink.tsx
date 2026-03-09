"use client";

import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

const GitHubLink = () => {
  const path = usePathname();

  return (
    <button
      onClick={() =>
        sendGTMEvent({
          event: "github_link",
          page_location: path,
        })
      }
      type="button"
      className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:shrink-0"
    >
      Github
    </button>
  );
};

export default GitHubLink;
