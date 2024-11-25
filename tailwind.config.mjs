/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Habilita el modo oscuro usando la clase 'dark'
	theme: {
	  extend: {
		colors: {
		  light: {
			gradient1: '#ffffff', // Blanco
			gradient2: '#f1f1f1', // Azul claro
			gradient3: '#e0e0e0', // Azul medio
		  },
		  dark: {
			gradient1: '#000000', // Negro
			gradient2: '#121212', // Azul oscuro (Índigo)
			gradient3: '#1a1a1a', // Azul neón brillante
		  },
		},
	  },
	},
	plugins: [],
  }
  