import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
	return (
		<section id="about" className="snap-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-col md:flex-row justify-evenly items-center relative h-screen max-w-7xl px-10 mx-auto text-center md:text-left"
			>
				<h3 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
					About
				</h3>

				<div className="flex flex-col md:flex-row items-center">
					<motion.div
						className="flex flex-shrink-0 mb-8 md:mb-0 w-56 h-56 md:w-64 md:h-64 xl:w-96 xl:h-12w-96 "
						initial={{
							x: -200,
							opacity: 0,
						}}
						whileInView={{
							x: 0,
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
							className="rounded-full md:rounded-lg object-cover"
							src="https://picsum.photos/384"
							alt="User profile picture"
							width={384}
							height={384}
						/>
					</motion.div>

					<motion.div
						initial={{
							x: 200,
							opacity: 0,
						}}
						whileInView={{
							x: 0,
							opacity: 1,
						}}
						viewport={{
							once: true,
						}}
						transition={{
							duration: 1.2,
						}}
						className="space-y-10 px-0 md:px-10 max-w-5xl"
					>
						<h4 className="text-4xl font-semibold">
							Here's a{' '}
							<span className="underline decoration-orange-400">snippet</span>{' '}
							of my background
						</h4>
						<p className="text-base">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Asperiores error nulla rerum impedit libero sunt consectetur,
							dignissimos maxime laudantium. Natus provident ratione dicta
							consectetur repudiandae, magnam optio omnis incidunt ab fugit
							mollitia labore dolore quaerat aspernatur, unde quod error.
						</p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
