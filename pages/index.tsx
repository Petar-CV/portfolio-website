import Head from 'next/head'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

export default function Home() {
	return (
		<div className="bg-dark-gray text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Petar CV</title>
				<meta
					name="description"
					content="Personal portfolio by Petar Cvetko Voćanec"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Hero />
		</div>
	)
}
