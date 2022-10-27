import Head from 'next/head'

import Header from '../components/Header/Header'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Petar CV</title>
				<meta
					name="description"
					content="Personal portfolio by Petar Cvetko Voćanec"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	)
}
