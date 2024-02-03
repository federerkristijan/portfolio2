import HomePage from "@/components/pages/HomePage";
import { Navbar } from "./../components/global/navbar/Navbar";
import { PageProps } from "@/types";

export default function IndexPage(props: PageProps) {
  const { page } = props;

  const sections = {
    about: page?.aboutPage || { title: "", subtitle: "" },
    contact: page?.contactPage || { title: "", subtitle: "" },
    hero: page?.heroSection || { title: "", subtitle: "" },
    projects: page?.projectsSection || { title: "", subtitle: "" },
  };

  return (
    <div className="h-fit">
      <HomePage page={page} sections={sections} />
    </div>
  );
}
