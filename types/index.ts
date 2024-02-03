import { ReactElement } from "react";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export interface AboutPagePayload {
  title: string;
  subtitle: string;
  image?: StaticImageData;
  skills?: Skill[];
}

export interface ContactPagePayload {
  title: string;
  subtitle: string;
  image?: typeof Image;
}

export interface HeroSectionPayload {
  title: string;
  subtitle: string;
  image?: typeof Image;
}

export interface HomePagePayload {
  heroSection?: HeroSectionPayload;
  aboutPage?: AboutPagePayload;
  contactPage?: ContactPagePayload;
  projectpage?: ProjectsPagePayload;
}

export interface HomePageProps {
  page: HomePagePayload;
  sections?: Section;
}

export interface AboutPageProps {
  title: string;
  description: string;
  image: ReactElement;
  skills: never[];
  page: AboutPagePayload;
}

export interface LayoutProps {
  children: React.ReactNode;
  menuItems?: MenuItem[];
}

export interface LogoProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export interface MenuItem {
  title: string;
  url: string;
}

export interface NavbarProps {
  menuItems?: MenuItem[];
}

export interface PageProps {
  page: HomePagePayload;
  sections: Section;
}

export interface Project {
  title: string;
  description: string;
  image?: typeof Image;
  url: string;
}

export interface ProjectsPagePayload {
  title: string;
  subtitle: string;
  projects?: Project[];
}

export interface Section {
  about: AboutPagePayload;
  contact: ContactPagePayload;
  hero: HeroSectionPayload;
  projects: ProjectsPagePayload;
}

export interface Skill {
  title: string;
}
