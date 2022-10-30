import React from 'react'
import { motion } from 'framer-motion'

import SkillBadge from './Badge/SkillBadge'
import { ISkill, ISkillExperience } from '../../typings'

type Props = {
	skills: ISkill[]
	skillExperiences: ISkillExperience[]
}

export default function Skills({ skills, skillExperiences }: Props) {
	return (
		<section id="skills" className="snap-start">
			{/* TODO: Implement a generic component for sections with same animation */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-col xl:flex-row relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
			>
				{/* TODO: Implement a generic component for headers */}
				<h1 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
					Skills
				</h1>

				{/* TODO: Sort skills by experience */}
				<div className="p-4 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-5 h-[65vh] overflow-x-hidden overflow-y-auto custom-scrollbar">
					{skills.map((skill) => (
						<SkillBadge key={skill._id} skill={skill} />
					))}
				</div>
			</motion.div>
		</section>
	)
}
