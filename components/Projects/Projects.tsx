import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
	const projects = ['Project1', 'project2', 'project3']

	return (
		<section id="projects" className="snap-start">
			{/* TODO: Implement a generic component for sections with same animation */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="h-screen relative flex flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0"
			>
				{/* TODO: Implement a generic component for headers */}
				<h3 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
					Projects
				</h3>

				<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 custom-scrollbar">
					{projects.map((project, i) => (
						<div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
							<motion.div
								initial={{ y: -300, opacity: 0 }}
								transition={{ duration: 1.2 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
							>
								<Image
									src="https://picsum.photos/128"
									alt="User profile picture"
									width={128}
									height={128}
								/>
							</motion.div>

							<div className="space-y-10 px-0 md:px-10 max-w-6xl">
								<h4 className="text-xl md:text-4xl font-semibold text-center">
									<span className="underline decoration-red-700/50 mr-2">
										Project {i + 1} of {projects.length}:
									</span>
									{project}
								</h4>

								<p className="text-lg text-center md:text-left">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
									nihil, nesciunt velit qui debitis expedita non sequi,
									reiciendis facilis architecto ullam eveniet delectus porro
									repudiandae animi vitae cum consequatur eaque id.
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="w-full absolute top-1/3 bg-red-900 left-0 h-[500px] -skew-y-12"></div>
			</motion.div>
		</section>
	)
}
