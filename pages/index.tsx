import HomePage from "@/components/pages/HomePage";
import { Navbar } from "./../components/global/navbar/Navbar";
import { PageProps } from "@/types";
import { LayoutGroup } from "framer-motion";
import Layout from "./layout";

export default function IndexPage(props: PageProps) {
  const { page } = props;

  const sections = {
    about: page?.aboutPage || { title: "", subtitle: "" },
    contact: page?.contactPage || { title: "", subtitle: "" },
    hero: page?.heroSection || { title: "", subtitle: "" },
    projects: page?.projectsSection || { title: "", subtitle: "" },
  };

  return (
      <Layout >
        <HomePage page={page} sections={sections} />
      </Layout>
  );
}
