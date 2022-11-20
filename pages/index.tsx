import Head from 'next/head';
import { GetStaticProps } from 'next';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { IExperience, IPageInfo, IProject, ISkill, ISkillExperience, ISocial } from '../typings';
import { fetchDataFor } from '../utils/fetching/fetchDataFor.util';

type Props = {
  pageInfo: IPageInfo;
  experiences: IExperience[];
  skills: ISkill[];
  projects: IProject[];
  socials: ISocial[];
  skillExperiences: ISkillExperience[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  skillExperiences,
}: Props) {
  return (
    <div className="bg-dark-gray text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <Head>
        <title>Petar CV</title>
        <meta name="description" content="Personal portfolio by Petar Cvetko Voćanec" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <Hero pageInfo={pageInfo} />

      <About pageInfo={pageInfo} />

      <WorkExperience experiences={experiences} />

      <Skills skills={skills} skillExperiences={skillExperiences} />

      <Projects projects={projects} />

      <Contact pageInfo={pageInfo} />

      <Footer pageInfo={pageInfo} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: IPageInfo = await fetchDataFor('page-info');
  const experiences: IExperience[] = await fetchDataFor('experiences');
  const skills: ISkill[] = await fetchDataFor('skills');
  const projects: IProject[] = await fetchDataFor('projects');
  const socials: ISocial[] = await fetchDataFor('socials');
  const skillExperiences: ISkillExperience[] = await fetchDataFor('skill-experiences');

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      skillExperiences,
    },
    revalidate: 600,
  };
};
