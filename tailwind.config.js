/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#374151',
        secondary: '#646464',
        accent: '#ffaa01',
        Lightyellow: '#eab308',
        Lightblue: '#1e3a8a',
      },
    },
  },
  plugins: [],
}

