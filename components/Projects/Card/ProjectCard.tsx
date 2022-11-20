import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { urlFor } from '../../../sanity';
import { IProject } from '../../../typings';

type Props = {
  project: IProject;
  projectIndex: number;
};

export default function ProjectCard({ project, projectIndex }: Props) {
  return (
    <article className="h-full flex flex-col rounded-lg items-center snap-center p-5 bg-lighter-gray space-y-5 cursor-pointer transition-opacity duration-200">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <Image
          src={urlFor(project.image).url()}
          alt={project.title ?? ''}
          width={512}
          height={512}
        />
      </motion.div>

      <div className="space-y-4 px-0 md:px-10 max-w-6xl">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          <span>
            <span className="underline decoration-red-900 mr-2">Project {projectIndex}:</span>
            {project.title}
          </span>
        </h4>

        {project.linkToBuild ? (
          <div className="text-lg text-center md:text-left">
            Production link: &nbsp;
            <Link
              href={project.linkToBuild}
              target="_blank"
              className="hover:brightness-75 underline decoration-red-900 decoration-2">
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
              className="hover:brightness-75 underline decoration-red-900 decoration-2">
              here
            </Link>
          </div>
        ) : null}

        <p className="text-lg text-center md:text-left">{project.summary}</p>
      </div>
    </article>
  );
}
