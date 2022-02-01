module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      yellow: '#FFDA9A',
      gold: '#ffc868',
      dark: '#26222f',
      darker: '#181323',
      purp: '#373047',
      light: '#E7E7E7',
      medium: '#7D7886',
    },
    fontFamily: {
      sans: ['"IBM Plex Sans Thai Looped"', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
      padding: {
        DEFAULT: '2rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
