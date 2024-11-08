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
		}
	},
	plugins: [],
}

