import HomePage from "@/components/pages/HomePage";
import { Navbar } from "./../components/global/navbar/Navbar";
import { PageProps } from "@/types";

export default function IndexPage(props: PageProps) {
  const { page } = props;

  const section = {
    about: page?.aboutSection,
    contact: page?.contactSection,
    hero: page?.heroSection,
    projects: page?.projectsSection,
  };

  return (
    <div className=" bg-black text-white">
      <Navbar />
      <HomePage page={page} section={section} />
    </div>
  );
}
