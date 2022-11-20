import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { IExperience } from '../../../typings';
import { urlFor } from '../../../sanity';

type Props = {
  experience: IExperience;
};

export default function WorkExperienceCard({ experience }: Props) {
  return (
    <article className="h-full flex flex-col rounded-lg items-center snap-center p-5 bg-lighter-gray space-y-5 cursor-pointer transition-opacity duration-200">
      <motion.div
        className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}>
        <Image
          className="rounded-full object-cover"
          src={urlFor(experience.companyImage).url()}
          alt={experience.company ?? ''}
          width={208}
          height={208}
        />
      </motion.div>

      <div className="w-full px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light ">{experience.jobTitle}</h4>
        {experience.url ? (
          <Link
            href={experience.url}
            target="_blank"
            className="font-bold text-lg md:text-2xl mt-1 hover:brightness-75 hover:underline decoration-red-700/50">
            {experience.company}
          </Link>
        ) : (
          <p className="font-bold text-lg md:text-2xl mt-1">{experience.company}</p>
        )}
        <div className="grid gap-2 md:gap-4 grid-cols-5 md:grid-cols-7 xl:grid-cols-9 my-2">
          {experience.technologies?.map((technology) => (
            <Image
              className="rounded-full h-10 w-10 bg-gray-100"
              src={urlFor(technology.image).url()}
              alt={technology.name ?? ''}
              key={technology._id}
              width={40}
              height={40}
            />
          ))}
        </div>
        {experience.dateStarted && experience.dateEnded && (
          <p className="uppercase py-1 md:py-2 text-gray-300">
            {experience.dateStarted} - {experience.dateEnded}
          </p>
        )}
        {experience.dateStarted && !experience.dateEnded && (
          <p className="uppercase py-1 md:py-2 text-gray-300">{experience.dateStarted} - Present</p>
        )}
        <ul className="list-disc space-y-1 md:space-y-2 py-1 md:py-2 ml-5 text-sm md:text-lg">
          {experience.skillsAcquired?.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
