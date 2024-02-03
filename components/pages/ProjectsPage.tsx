import { ProjectsPagePayload } from "@/types";
import Image from "next/image";
import { projectsVars } from "@/utils/variables";

export default function ProjectsPage({ title, subtitle }: ProjectsPagePayload) {
  return (
    <div className="bg-[#000000] h-full p-10 text-white">
      <h1 className="py-4">{title}</h1>
      <div className="flex">
        {projectsVars && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projectsVars.map((project, index) => (
              <div
                className="flex flex-col gap-4 p-2 rounded-xl shadow-lg w-full h-full bg-slate-300 border-2 border-slate-400 text-black"
                key={index}
              >
                <h3 className="text-center">{project.title}</h3>
                <p className="">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1 px-2  w-full h-full rounded-xl bg-black "
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >

                  <Image
                    src={project.image}
                    alt="project"
                    width={450}
                    height={300}
                    className="rounded-xl w-[910%] h-[100%]"
                  />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
