"use client";
import { useState } from "react";
import CardGrid from "./CardGrid";
import TagFilter from "./TagFilter";
import { Project } from "@/types/project";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <section>
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      <CardGrid projects={filteredProjects} />
    </section>
  );
}
