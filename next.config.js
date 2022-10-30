/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: 'picsum.photos',
				protocol: 'https',
			},
			{
				hostname: 'cdn.sanity.io',
				protocol: 'https',
			},
		],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
}

// TODO: Remove remote pattern after implementation or leave in development mode

module.exports = nextConfig
