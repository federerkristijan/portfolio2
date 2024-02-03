import { NextPage } from 'next';
import { AboutPagePayload } from "@/types";
import AboutPage from "@/components/pages/AboutPage";
import Layout from "./layout";
import {aboutVars, skills} from "@/utils/variables";
import Image from "next/image";
import Foto from "@/assets/CV Foto Glasses 1 - Edited 1.png";
import React from 'react';

const About: NextPage<AboutPagePayload> = ({ title, subtitle, image, skills }) =>  {

  return (
    <>
    <Layout>
      <AboutPage
        title={title}
        subtitle={subtitle}
        image={image}
        skills={skills || []}
      />
    </Layout>
    </>
  );
}


export const getStaticProps = async () => {
  const page: AboutPagePayload = {
    title: aboutVars.title,
    subtitle: aboutVars.description,
    image: Foto,
    skills: skills,
  };

  return {
    props: page,
  };
};

export default About;
