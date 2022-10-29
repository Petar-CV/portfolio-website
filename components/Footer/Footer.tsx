import React from 'react'

type Props = {}

export default function Footer({}: Props) {
	return (
		<footer className="sticky bottom-2 w-full">
			<div className="flex justify-center items-center text-center text-gray-400 text-sm md:text-base">
				<h4>
					Copyright &copy; {new Date().getFullYear()} | Petar Cvetko Voćanec
				</h4>
			</div>
		</footer>
	)
}
