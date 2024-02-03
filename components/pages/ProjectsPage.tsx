import { ProjectsPagePayload } from "@/types";
import Image from "next/image";
import { projectsVars } from "@/utils/variables";

export default function ProjectsPage({  }: ProjectsPagePayload) {
  return (
    <div className="bg-[#000000] h-full p-10 text-white">
      <h1 className="py-4">{projectsVars.title}</h1>
      <div className="flex">
      </div>
    </div>
  );
}
