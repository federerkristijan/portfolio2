import { ProjectsPagePayload } from "@/types";
import Image from "next/image";
import { projectsVars } from "@/utils/variables";

export default function ProjectsPage({ title, subtitle }: ProjectsPagePayload) {
  return (
    <div className="bg-[#000000] h-full p-10 text-white">
      <h1 className="py-4">{title}</h1>
      <div className="flex">
        {projectsVars && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projectsVars.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <h2 className="text-xl">{project.title}</h2>
                <p className="pt-4">{project.description}</p>
                <div className="pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400"
                  >
                    {project.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
