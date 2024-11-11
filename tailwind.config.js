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
		screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" }
		}
	},
	plugins: [],
}

