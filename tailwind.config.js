module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { width: '0' }
        },
        fadeInBackdrop: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' }
        }
      },
      animation: {
        slide: 'slide 0.3s ease-in',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
  }
}
