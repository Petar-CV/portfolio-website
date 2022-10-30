import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { IExperience } from '../../../typings'
import { urlFor } from '../../../sanity'

type Props = {
	experience: IExperience
}

export default function WorkExperienceCard({ experience }: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center snap-center p-5 bg-lighter-gray space-y-5 flex-shrink-0 w-80 md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
				}}
			>
				<Image
					className="rounded-full object-cover"
					src={urlFor(experience.companyImage).url()}
					alt={experience.company ?? ''}
					width={208}
					height={208}
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="text-2xl md:text-4xl font-light ">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-xl md:text-2xl mt-1">
					{experience.company}
				</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies?.map((technology) => (
						<Image
							className="rounded-full h-10 w-10"
							src={urlFor(technology.image).url()}
							alt={technology.name ?? ''}
							key={technology._id}
							width={40}
							height={40}
						/>
					))}
				</div>
				{experience.dateStarted && experience.dateEnded && (
					<p className="uppercase py-5 text-gray-300">
						{experience.dateStarted} - {experience.dateEnded}
					</p>
				)}
				{experience.dateStarted && !experience.dateEnded && (
					<p className="uppercase py-5 text-gray-300">
						{experience.dateStarted} - Present
					</p>
				)}
				<ul className="list-disc space-y-2 ml-5 text-lg">
					{experience.skillsAcquired?.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
		</article>
	)
}
