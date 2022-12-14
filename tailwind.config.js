const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			gray: {
				300: '#898989',
				400: '#868686',
				450: '#2A2A2A',
				500: '#262626',
				600: '#282828',
				650: '#202020',
				700: '#1C1B1C',
				800: '#131313',
				900: '#0c0c0e',
			},
			green: '#1ED45E',
			darkGreen: '#1ed760',
			blue: '#1090B8',
			blueLight: '#069FCE',
			transparent: colors.transparent,
		},
		extend: {
			screens: {
				xxl: { max: '1350px' },
				xl: { max: '1100px' },
				xl2: { max: '1000px' },
				xl3: { max: '900px' },
				sm: { max: '760px' },
				sm2: { max: '650px' },
				sm3: { max: '600px' },
				sm4: { max: '500px' },
				sm5: { max: '400px' },
				sm6: { max: '350px' },
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				up: {
					from: {
						opacity: 0,
						transform: 'translateY(10px)',
					},
					to: {
						opacity: 1,
						transform: 'translateY(0px)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				up: 'up .5s ease-in-out',
			},
			transition: {
				base: 'all 0.3s ease',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [],
}
