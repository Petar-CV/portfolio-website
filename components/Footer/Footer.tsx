import React from 'react'
import { motion } from 'framer-motion'

import { IPageInfo } from '../../typings'

type Props = {
	pageInfo: IPageInfo
}

export default function Footer({ pageInfo }: Props) {
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
					Copyright &copy; {new Date().getFullYear()} |{' '}
					{pageInfo.name ?? 'Petar Cvetko Voćanec'}
				</h4>
			</div>
		</motion.footer>
	)
}
