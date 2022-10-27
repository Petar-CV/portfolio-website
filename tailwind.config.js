/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-gray': 'rgb(36,36,36)',
			},
			letterSpacing: {
				'extra-wide': '15px',
			},
		},
	},
	plugins: [],
}
