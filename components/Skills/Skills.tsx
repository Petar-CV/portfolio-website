import React from 'react';
import { motion } from 'framer-motion';

import SkillBadge from './Badge/SkillBadge';
import { ISkill } from '../../typings';

type Props = {
  skills: ISkill[];
};

export default function Skills({ skills }: Props) {
  return (
    <section id="skills">
      {/* TODO: Implement a generic component for sections with same animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center space-y-8 px-5">
        {/* TODO: Implement a generic component for headers */}
        <div>
          <h1 className="uppercase tracking-wide-2xl text-gray-500 text-lg md:text-2xl text-center">
            Most prominent skills
          </h1>

          <div className="p-4 grid grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-5 overflow-x-hidden overflow-y-auto custom-scrollbar">
            {skills
              .filter((skill) => skill.prominentSkill)
              .map((skill) => (
                <SkillBadge key={skill._id} skill={skill} />
              ))}
          </div>
        </div>

        <div>
          <h1 className="uppercase tracking-wide-2xl text-gray-500 text-lg md:text-2xl text-center">
            Other tools I&apos;ve used
          </h1>

          <div className="p-4 grid grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-5 overflow-x-hidden overflow-y-auto custom-scrollbar">
            {skills
              .filter((skill) => !skill.prominentSkill)
              .map((skill) => (
                <SkillBadge key={skill._id} skill={skill} />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
