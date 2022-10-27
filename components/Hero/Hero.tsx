import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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

	// TODO: Export this to constants file
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
		<section
			id="hero"
			className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start"
		>
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://picsum.photos/200"
				alt="User profile picture"
				width={128}
				height={128}
			/>

			<div>
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-wide-xl md:tracking-wide-2xl">
					Software engineer
				</h2>
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="#fb923c" />
				</h1>

				<div className="pt-5">
					{routes.map((route) => (
						<Link href={route.href} key={route.name}>
							<button className="hero-button">{route.name}</button>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
