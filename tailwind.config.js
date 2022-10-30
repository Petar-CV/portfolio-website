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
				'lighter-gray': 'rgb(41, 41, 41)',
			},
			letterSpacing: {
				'wide-lg': '5px',
				'wide-xl': '10px',
				'wide-2xl': '15px',
			},
			brightness: {
				85: '.85',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
