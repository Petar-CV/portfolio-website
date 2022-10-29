import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Footer({}: Props) {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			className="sticky bottom-2 w-full"
		>
			<div className="flex justify-center items-center text-center text-gray-400 text-sm md:text-base">
				<h4>
					Copyright &copy; {new Date().getFullYear()} | Petar Cvetko Voćanec
				</h4>
			</div>
		</motion.footer>
	)
}
