import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

import { ISkill } from '../../../typings';
import { urlFor } from '../../../sanity';

type Props = {
  skill: ISkill;
};

export default function SkillBadge({ skill }: Props) {
  return (
    <Tooltip title={skill.name}>
      <Link
        href={skill.officialPage ?? ''}
        target={'_blank'}
        className="group relative flex cursor-pointer">
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1 }}>
          <Image
            className="rounded-full bg-gray-100 border border-gray-500 h-16 w-16 md:h-24 md:w-24 xl:h-32 xl:w-32 object-cover filter group-hover:brightness-75 group-hover:grayscale transition duration-500 ease-in-out"
            src={urlFor(skill.image).url()}
            alt={skill.name ?? ''}
            width={128}
            height={128}
          />
        </motion.div>
      </Link>
    </Tooltip>
  );
}
