module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { left: '-100%' },
          '100%': { left: '0' }
        },
        fadeInBackdrop: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' }
        }
      },
      animation: {
        slide: 'slide 0.8s ease-in',
        backdrop: 'fadeInBackdrop 0.5s ease-in'
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
