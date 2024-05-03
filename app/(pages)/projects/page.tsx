import React from "react";
import ProjectsContainer from "./components/ProjectsContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Projects",
  description: "Have a look at some of my projects",
};
export default function Projects() {
  return (
    <div className="container py-6 sm:py-10">
      <ProjectsContainer />
    </div>
  );
}
