import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function WorkExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center snap-center p-10 bg-lighter-gray space-y-7 flex-shrink-0 w-80 md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
					src="https://picsum.photos/208"
					alt="User profile picture"
					width={208}
					height={208}
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light ">Something of something</h4>
				<p className="font-bold text-2xl mt-1">Company name</p>
				<div className="flex space-x-2 my-2">
					<Image
						className="rounded-full h-10 w-10"
						src="https://picsum.photos/40"
						alt="User profile picture"
						width={40}
						height={40}
					/>
					{/* Technology stacks used */}
				</div>
				<p className="uppercase py-5 text-gray-300">{/* Dates */}</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary</li>
					<li>Summary</li>
					<li>Summary</li>
					<li>Summary</li>
					<li>Summary</li>
				</ul>
			</div>
		</article>
	)
}
