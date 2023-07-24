/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'color-text': 'hsl(0deg, 0%, 100%)',
        'color-background-dark': 'hsl(210deg, 30%, 8%)',
        'color-background-light': 'hsl(0deg, 0%, 100%)',
        'color-blurred-background': 'hsla(210deg, 30%, 8%, 0.85)',
        'color-primary': 'hsl(230deg, 100%, 67%)',
        'color-secondary': 'hsl(333deg, 100%, 52%)',
        'color-tertiary': 'hsl(53deg, 100%, 50%)',
        'color-decorative': 'hsl(200deg, 50%, 60%)',
        'color-muted': 'hsl(210deg, 38%, 15%)',
        'color-muted-background': 'hsla(210deg, 38%, 15%, 0.85)',
        'color-info': 'hsl(230deg, 100%, 67%)',
        'color-success':' hsl(160deg, 100%, 40%)',
        'color-success-background': 'hsla(160deg, 100%, 40%, 0.1)',
       ' color-error': 'hsl(340deg, 95%, 60%)',
        'color-error-background': 'hsla(340deg, 95%, 43%, 0.1)',
        'color-alert': 'hsl(30deg, 100%, 50%)',
        'color-alert-background': 'hsla(38deg, 100%, 50%, 0.1)',
        'color-venn-0': 'hsl(250deg, 100%, 50%)',
        'color-venn-1': 'hsl(175deg, 100%, 50%)',
        'color-gray-100': 'hsl(210deg, 15%, 20%)',
        'color-gray-200': 'hsl(210deg, 15%, 25%)',
        'color-gray-300': 'hsl(210deg, 10%, 40%)',
       ' color-gray-400': 'hsl(210deg, 9%, 45%)',
        'color-gray-500': 'hsl(210deg, 8%, 50%)',
        'color-gray-600': 'hsl(210deg, 12%, 55%)',
        'color-gray-700': 'hsl(210deg, 14%, 66%)',
        'color-gray-900': 'hsl(210deg, 25%, 88%)',
        'color-gray-1000': 'hsl(210deg, 25%, 96%)',
        'color-subtle-background':' hsl(210deg, 30%, 8%)',
        'color-subtle-floating': 'hsl(210deg, 22%, 15%)',
        'color-homepage-light': 'hsla(200deg, 100%, 85%, 0)',
        'color-homepage-dark': 'hsla(200deg, 100%, 85%, 0.1)',
        'color-homepage-bg':' hsl(210deg, 30%, 8%)',
        'syntax-bg': 'hsl(210deg, 30%, 12%)',
        'syntax-highlight': 'hsl(210deg, 30%, 18%)',
        'color-subtle-background-2': 'hsl(200deg, 10%, 95%)',
        'syntax-txt': '#fff',
        
      }
    },
  },
  plugins: [],
}
