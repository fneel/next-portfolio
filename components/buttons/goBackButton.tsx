"use client";

import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <button
      onClick={handleGoBack}
      aria-label="back to previous page"
      className="back-button self-start justify-self-start font-medium [font-variant:all-small-caps] text-neutral-500 underline p-2 hover:cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <ArrowLeft className="text-neutral-500 h-4 items-center" /> back to
        projects
      </div>
    </button>
  );
};

export default BackButton;
