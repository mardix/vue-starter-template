module.exports = {
	content: [
		'./index.html', 
		'./src/**/*.{vue,js,ts,jsx,tsx,md}'
	],

	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('daisyui')
	],
};
