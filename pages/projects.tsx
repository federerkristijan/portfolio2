import { GetStaticProps, NextPage } from 'next';
import { ProjectsPagePayload, ProjectsPageProps } from "@/types";
import ProjectsPage from "@/components/pages/ProjectsPage";
import Layout from "./layout";
import {aboutVars, projectsVars, skills} from "@/utils/variables";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import React from 'react';

const Projects: NextPage<ProjectsPagePayload> = ({ title, subtitle, image, skills }) =>  {

  return (
    <Layout>
      <ProjectsPage
        title={title}
        subtitle={subtitle}
        projects={skills || []}
      />
    </Layout>
  );
}


export const getStaticProps = async () => {
  const page: ProjectsPagePayload = {
    title: projectsVars.title,
    subtitle: projectsVars.subtitle,
    projects: projectsVars.projects,
  };

  return {
    props: page,
  };
};

export default Projects;
