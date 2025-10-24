import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors for text and dark backgrounds
        primary: {
          DEFAULT: '#1A1C1F', // Graphite
          light: '#F7F8FA', // Light background
          dark: '#121417', // Even darker for dark mode backgrounds
        },
        // Accent color (Teal)
        accent: {
          DEFAULT: '#00979F', // Teal
          hover: '#007A7F', // Darker teal for hover states
        },
        // Secondary text color (Silver/Steel)
        steel: {
          DEFAULT: '#BAC5B3', // Silver
          dark: '#9AA797', // Darker silver for dark mode elements
        },
        // Semantic text colors, mapped to primary/steel
        text: {
          DEFAULT: 'var(--color-text-default)',
          secondary: 'var(--color-text-secondary)',
        },
        // Semantic background colors, mapped to primary
        background: {
          DEFAULT: 'var(--color-background-default)',
          light: 'var(--color-background-light)',
        },
        // Semantic border colors
        border: {
          DEFAULT: 'var(--color-border-default)',
          dark: 'var(--color-border-dark)',
        },
        // Existing status colors
        success: '#10B981', 
        warning: '#F59E0B', 
        danger: '#EF4444', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        arabic: ['Tajawal', 'sans-serif'],
      },
       fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem', // 16px
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      letterSpacing: {
        tight: '-0.025em',
        tighter: '-0.05em',
      },
      animation: {
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
          'gradient-xy': {
              '0%, 100%': {
                  'background-size': '400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center'
              }
          },
      }
    }
  },
  plugins: [],
} satisfies Config
