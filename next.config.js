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
		],
	},
}

// TODO: Remove remote pattern after implementation

module.exports = nextConfig
