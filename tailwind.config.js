/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0C743D', // The main forest green
          'light': '#10A142', // A slightly lighter version for hover states
          'dark': '#085C30'   // A darker version for active/pressed states
        },
        'secondary': '#7D7E75', // The mid-gray for secondary text or borders
        'accent': '#CFD6EA',    // The light lavender-gray for highlights or backgrounds
        'neutral': {
          'light': '#B0B2B8', // The lighter gray
          'dark': '#251E18'   // The dark charcoal for main text and headers
        },
        'background': '#F8F9FA' // A very light, clean off-white for the main page background
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'leaf-float': 'leafFloat 25s linear infinite',
        'professional-float': 'professionalFloat 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'shimmer': 'professionalShimmer 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0.5deg)' },
        },
        leafFloat: {
          '0%': { transform: 'translateX(-100px) translateY(0px) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.3' },
          '85%': { opacity: '0.3' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg)', opacity: '0' },
        },
        professionalFloat: {
          '0%, 100%': { transform: 'translateY(0px)', boxShadow: '0 20px 60px -12px rgba(26, 75, 58, 0.4)' },
          '50%': { transform: 'translateY(-3px)', boxShadow: '0 25px 70px -12px rgba(26, 75, 58, 0.5)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        professionalShimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-10deg)', opacity: '0' },
          '50%': { transform: 'translateX(50%) skewX(-10deg)', opacity: '1' },
          '100%': { transform: 'translateX(100%) skewX(-10deg)', opacity: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
                    boxShadow: {
          'professional': '0 15px 50px rgba(12, 116, 61, 0.15)',
          'primary': '0 8px 25px rgba(12, 116, 61, 0.4)',
          'primary-lg': '0 15px 40px rgba(12, 116, 61, 0.6)',
          'accent': '0 4px 20px rgba(207, 214, 234, 0.3)',
        },
    },
  },
  plugins: [],
} 