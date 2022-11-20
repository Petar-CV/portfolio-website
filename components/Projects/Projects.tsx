import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { IProject } from '../../typings';
import { urlFor } from '../../sanity';
import Link from 'next/link';

type Props = {
  projects: IProject[];
};

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="snap-start">
      {/* TODO: Implement a generic component for sections with same animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0">
        {/* TODO: Implement a generic component for headers */}
        <h1 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
          Projects
        </h1>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 custom-scrollbar">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 px-10 md:p-44">
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}>
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.title ?? ''}
                  width={512}
                  height={512}
                />
              </motion.div>

              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  <span>
                    <span className="underline decoration-lighter-gray mr-2">
                      Project {i + 1} of {projects.length}:
                    </span>
                    {project.title}
                  </span>
                </h4>

                {project.linkToBuild ? (
                  <div className="text-lg text-center md:text-left">
                    Production link: &nbsp;
                    <Link
                      href={project.linkToBuild}
                      target="_blank"
                      className="hover:brightness-75 underline decoration-lighter-gray decoration-2">
                      here
                    </Link>
                  </div>
                ) : null}

                {project.repoLink ? (
                  <div className="text-lg text-center md:text-left">
                    Repository link: &nbsp;
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="hover:brightness-75 underline decoration-lighter-gray decoration-2">
                      here
                    </Link>
                  </div>
                ) : null}

                <p className="text-lg text-center md:text-left">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-1/3 bg-red-900 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </section>
  );
}
