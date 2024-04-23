import React from "react";
import HeroPrallex from "./hero-prallex";
import { projectData } from "@/utils/project-data";

export default function ProjectSection() {
  return (
    <div>
      <HeroPrallex projects={projectData} />
    </div>
  );
}
