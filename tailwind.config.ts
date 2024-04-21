import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#3F414C",
				},
				secondary: {
					DEFAULT: "#9F9FAA",
					light: "#F8F8F8",
				},
			},
			backgroundImage: {
				landing_hero: "url('/landing_hero.png')",
				what_we_do_hero: "url('/what_we_do_hero.png')",
				vision_hero: "url('/vision_hero.png')",
				crafting_contemorary_hero: "url('/crafting_contemorary_hero.png')",
				why_choose_hero: "url('/why_choose_hero.png')",
				squares: "url('/squares.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
