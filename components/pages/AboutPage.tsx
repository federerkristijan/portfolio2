import { AboutPagePayload } from "@/types";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import {aboutVars} from "@/utils/variables";

export default function AboutPage({
  title,
  subtitle,
  image,
  skills,
}: AboutPagePayload) {
  return (
    <>
    <div className="bg-[#ffffff] h-full p-10 text-black">
      <h1 className="py-4">{aboutVars.title}</h1>
      <div>
      {image && (
        <Image
          src={Foto}
          alt="foto"
          width={200}
          height={200}
        />
      )}
      <h3 className="border-2 border-black p-3">
        {aboutVars.description}
      </h3>
      </div>
    </div>
    </>
  );
}
