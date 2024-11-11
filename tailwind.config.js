/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {},
		fontFamily: {
			'roboto': 'Roboto, sans-serif',
			'roboto-mono': 'Roboto mono, sans-serif'
		},
		// screens: {
			// 'sm': {'min': '640px', 'max': '767px'},
			// 'md': {'min': '768px', 'max': '1023px'},
			// 'lg': {'min': '1024px', 'max': '1279px'},
			// 'xl': {'min': '1280px', 'max': '1535px'},
			// '2xl': {'min': '1536px'},
		// }
	},
	plugins: [],
}

