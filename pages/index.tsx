import Head from 'next/head'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

export default function Home() {
	return (
		<div className="bg-dark-gray text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
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

			<About />

			<WorkExperience />

			<Skills />

			<Projects />
		</div>
	)
}
