import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import { ISocial } from '../../typings'

type Props = {
	socials: ISocial[]
}

export default function Header({ socials }: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
					/>
				))}
			</motion.div>

			<Link href="#contact">
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="flex flex-row items-center text-gray-300 cursor-pointer"
				>
					<EnvelopeOpenIcon className="w-6 h-6" />
					<p className="uppercase hidden md:inline-flex text-sm ml-1 text-gray-400">
						Get in touch
					</p>
				</motion.div>
			</Link>
		</header>
	)
}
