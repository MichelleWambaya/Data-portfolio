/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				sunflower: "#FFC300",
				dusk: "#FF5733",
				midnight: "#0A0A0A",
				skyblue: "#0066FF",
				nature: "#2E8B57",
				gold: "#B1975A",
			},
			fontFamily: {
				serif: ["Playfair Display", "DM Serif Display", "Cinzel", "serif"],
				sans: ["Inter", "Poppins", "Work Sans", "ui-sans-serif", "system-ui"],
			},
		},
	},
	corePlugins: {
		preflight: true,
	},
};
