import React from 'react'
import { motion } from 'framer-motion'

import WorkExperienceCard from './Card/WorkExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			id="experience"
			className="h-screen flex flex-col md:flex-row relative overflow-hidden text-left snap-center max-w-full justify-evenly px-10 mx-auto items-center"
		>
			<h3 className="absolute text-center top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
				Experience
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
				<WorkExperienceCard />
				<WorkExperienceCard />
				<WorkExperienceCard />
				<WorkExperienceCard />
			</div>
		</motion.section>
	)
}
