import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

type Props = {}

interface ILocalRoute {
	name: string
	href: string
}

export default function Hero({}: Props) {
	const [text] = useTypewriter({
		words: ["Name's Petar", "I'm a software developer"],
		loop: true,
		delaySpeed: 2000,
	})

	const routes: ILocalRoute[] = [
		{
			name: 'About',
			href: '#about',
		},
		{
			name: 'Experience',
			href: '#experience',
		},
		{
			name: 'Skills',
			href: '#skills',
		},
		{
			name: 'Projects',
			href: '#projects',
		},
		{
			name: 'Contact',
			href: '#contact',
		},
	]

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center">
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://picsum.photos/200"
				alt="User profile picture"
				width={128}
				height={128}
			/>

			<div>
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-extra-wide">
					Software engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-5">
					{routes.map((route) => (
						<Link href={route.href} key={route.name}>
							<button className="hero-button">{route.name}</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
