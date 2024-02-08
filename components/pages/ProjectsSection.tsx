import { ProjectsSectionPayload } from "@/types";
import Image from "next/image";
import Livepad from "@/assets/Livepad.png";
import Inklusion from "@/assets/Inklusion.png";
import DasaHink from "@/assets/DasaHink.png";
import { DiNodejs, DiDigitalOcean, DiDocker, DiGithub, DiMysql } from "react-icons/di";
import { SiPrisma, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma, FaNodeJs } from "react-icons/fa6";
import { projectsVars } from "@/utils/variables";
import { IconType } from "react-icons";

const ProjectsSection = ({ title, subtitle, image }: ProjectsSectionPayload) => {


  const icons = [
    FaNodeJs, TbBrandNextjs, SiTailwindcss, SiTypescript, DiDigitalOcean, SiVercel, DiDocker, FaFigma, DiGithub, SiPrisma, DiMysql
  ]

    return (
     <div className="flex">
        {projectsVars && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projectsVars.map((project, index) => (
              <div
                className="flex flex-col gap-4 p-2 rounded-xl shadow-lg w-full h-full bg-slate-300 border-2 border-slate-400 text-black"
                key={index}
              >
                <h3 className="text-center">{project.title}</h3>
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
                <p className="">{project.description}</p>
                <div className="flex gap-3 text-xl pl-20">
                  {project.icons.map((Icon: IconType) => (
                    <Icon key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default ProjectsSection;
