export interface AboutSectionPayload {
  title: string;
  subtitle: string;
  image?: typeof Image;
  skills?: Skill[];
}

export interface ContactSectionPayload {
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
  aboutSection?: AboutSectionPayload;
  contactSection?: ContactSectionPayload;
  projectsSection?: ProjectsSectionPayload;
}

export interface HomePageProps {
  page: HomePagePayload;
  sections?: Section;
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

export interface ProjectsSectionPayload {
  title: string;
  subtitle: string;
  projects?: Project[];
}

export interface Section {
  about: AboutSectionPayload;
  contact: ContactSectionPayload;
  hero: HeroSectionPayload;
  projects: ProjectsSectionPayload;
}

export interface Skill {
  title: string;
  image?: typeof Image;
}
