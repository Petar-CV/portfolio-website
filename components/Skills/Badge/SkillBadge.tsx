import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
	directionLeft?: boolean
}

export default function SkillBadge({ directionLeft }: Props) {
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
					src="https://picsum.photos/128"
					alt="User profile picture"
					width={128}
					height={128}
				/>
			</motion.div>

			<div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0 transition duration-300 ease-in-out">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">100%</p>
				</div>
			</div>
		</div>
	)
}
