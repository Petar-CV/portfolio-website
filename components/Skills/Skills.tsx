import React from 'react'
import { motion } from 'framer-motion'

import SkillBadge from './Badge/SkillBadge'

type Props = {}

export default function Skills({}: Props) {
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
				<h3 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
					Skills
				</h3>

				<h3 className="absolute top-36 px-4 uppercase tracking-wide-lg text-gray-500 text-sm">
					Hover over a skill for current proficiency
				</h3>

				<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
					<SkillBadge />
				</div>
			</motion.div>
		</section>
	)
}
