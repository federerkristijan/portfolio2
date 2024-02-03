import { AboutPagePayload } from "@/types";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import { aboutVars, quote, skills } from "@/utils/variables";
import { IconType } from "react-icons";
import { getIconComponent } from "@/utils/functions";

export default function AboutPage({ image, skills }: AboutPagePayload) {
  return (
    <div className="bg-[#ffffff] h-full p-10 text-black">
      <h1 className="py-4">{aboutVars.title}</h1>
      <div className="flex">
        {image && (
          <Image
            src={Foto}
            alt="foto"
            className="about-pic rounded-full bg-slate-300 border-gray-300 border-2 my-8 mr-2"
          />
        )}
        <div className="py-3 px-6 max-w-[80%]">
          <h3>{aboutVars.description}</h3>
          <ul className="skills-wrapper flex h-auto pt-6 gap-4 flex-wrap">
            {skills &&
              skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-l border-2 border-slate-400 w-fit py-1.5 px-3 rounded-xl shadow-lg bg-black text-white"
                >
                  {skill.title}
                </li>
              ))}
          </ul>
          <h2 className="text-center pt-12">{'"' + quote + '"'}</h2>
        </div>
      </div>
    </div>
  );
}
