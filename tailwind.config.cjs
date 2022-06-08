module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ['Montserrat', 'sans-serif'],
			body: ['Montserrat', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					light: '#DBE2F3',
					DEFAULT: '#21409A',
					dark: '#13255C',
				},
				secondary: {
					light: '#F6AFC8',
					DEFAULT: '#E7407B',
					dark: '#a22d56',
				},
				mango: {
					light: '#fff3ec',
					btn: '#ff8f50',
					DEFAULT: '#FF833D',
				},
				whats: {
					DEFAULT: '#25d366',
				},
				telegram: {
					DEFAULT: '#229ED9',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
