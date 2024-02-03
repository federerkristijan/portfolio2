import { Project, Skill } from "@/types";
// import { DiDigitalOcean, DiDjango, DiGithub, DiJavascript, DiMysql, DiNodejs, DiPython, DiReact, DiScrum } from "react-icons/di";
// import { SiTypescript, SiFigma, SiVercel } from "react-icons/si";
import Livepad from "@/assets/Livepad.png";
import Inklusion from "@/assets/Inklusion.png";
import DasaHink from "@/assets/DasaHink.png";

export const aboutVars = {
  title: 'About',
  description:
    "I'm a passionate code creator and language enthusiast, weaving innovation into the digital realm of possibilities. Always open to a new challenge and learning and exploring new technologies, I'm a firm believer in the power of collaboration and teamwork. I'm a self-taught developer with a strong knowledge in JavaScript, Next.js, Typescript, Python, Django and Sanity.io. I'm always looking for opportunities to learn and grow, and I'm excited to see where my journey takes me.",
};

export const skills: Skill[] = [
  {
    title: 'DigitalOcean',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Figma',
  },
  {
    title: 'React',
  },
  {
    title: 'Mysql',
  },
  {
    title: 'Node.js',
  },
  {
    title: 'Python',
  },
  {
    title: 'Django',
  },
  {
    title: 'Github'
  },
  {
    title: 'Vercel'
  },
  {
    title: 'Scrum'
  },
  {
    title: 'Next.js'
  },
  {
    title: 'TailwindCSS'
  },
  {
    title: 'Prisma'
  }
];

export const quote = "Failure is an opportunity to learn and thrive."

export const projectsTitles = {
  title: 'Projects',
  subtitle: 'A collection of projects I have worked on',
};

export const projectsVars: Project[] = [
  {
    title: 'Livepad',
    description:
      'A blog built with Sanity.io, Next.js and TailwindCSS.',
    image: Livepad.src,
    url: 'https://www.livepad.org/',
  },
  {
    title: 'Inklusion Bühnenreif',
    description:
      'My personal portfolio built with Next.js, TailwindCSS and TypeScript.',
    image: Inklusion.src,
    url: 'https://www.inklusion-buehnenreif.de/',
  },
  {
    title: 'Dasa Hink',
    description:
      'My personal portfolio built with Next.js, TailwindCSS and TypeScript.',
    image: DasaHink.src,
    url: 'https://www.dasahink.com/',
  },
];
