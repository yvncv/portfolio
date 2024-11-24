/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Habilita el modo oscuro usando la clase 'dark'
	theme: {
	  extend: {
		colors: {
		  light: {
			gradient1: '#ffffff', // Blanco
			gradient2: '#a8dadc', // Azul claro
			gradient3: '#00d4ff', // Azul medio
			body: '#333333', // Color del cuerpo (Texto general)
			heading: '#1a202c', // Color para títulos (h1, h2, etc)
			strong: '#e02cbf', // Color para texto fuerte (strong)
			'light-text': '#2d2d2d',  // Color de texto en modo claro
			'light-bg': '#f0f0f0',    // Fondo claro
		  },
		  dark: {
			gradient1: '#000000', // Negro
			gradient2: '#1e3a8a', // Azul oscuro (Índigo)
			gradient3: '#00d4ff', // Azul neón brillante
			body: '#e2e8f0', // Color del cuerpo en modo oscuro
			heading: '#edf2f7', // Color para títulos en modo oscuro
			strong: '#f97316', // Color para texto fuerte (strong) en modo oscuro
			'dark-text': '#e0e0e0',   // Color de texto en modo oscuro
			'dark-bg': '#333333',     // Fondo oscuro
		  },
		},
	  },
	},
	plugins: [],
  }
  