import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { ISkill } from '../../../typings'
import { urlFor } from '../../../sanity'

type Props = {
	skill: ISkill
	directionLeft?: boolean
}

export default function SkillBadge({ skill, directionLeft }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.div
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
			>
				<Image
					className="rounded-full border border-gray-500 h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 object-cover filter group-hover:grayscale transition duration-500 ease-in-out"
					src={urlFor(skill.image).url()}
					alt={skill.name ?? ''}
					width={128}
					height={128}
				/>
			</motion.div>
		</div>
	)
}
