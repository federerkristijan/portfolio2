import { NextPage } from 'next';
import { ProjectsPagePayload } from "@/types";
import ProjectsPage from "@/components/pages/ProjectsPage";
import Layout from "./layout";
import { projectsTitles, projectsVars} from "@/utils/variables";
import Image from "next/image";
import { IconType } from 'react-icons';

const Projects: NextPage<ProjectsPagePayload> = ({ title, subtitle, projects }) =>  {

  return (
    <Layout>
      <ProjectsPage
        title={title}
        subtitle={subtitle}
        projects={projects || []}
      />
    </Layout>
  );
}


// export const getStaticProps = async () => {
//   const page: ProjectsPagePayload = {
//     title: projectsTitles.title,
//     subtitle: projectsTitles.subtitle,
//     projects: projectsVars || [] ,
//   };


//   return {
//     props: page,
//   };
// };

export default Projects;
