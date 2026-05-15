/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco-dark': '#0f1419',
        'eco-darker': '#0a0e13',
        'eco-green': '#00d084',
        'eco-lime': '#7eff2d',
        'eco-teal': '#00d4ff',
        'eco-purple': '#7c3aed',
      },
      backgroundImage: {
        'eco-gradient': 'linear-gradient(135deg, #00d084 0%, #00d4ff 100%)',
        'eco-dark-gradient': 'linear-gradient(135deg, rgba(0, 208, 132, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
      },
      boxShadow: {
        'eco-glow': '0 0 20px rgba(0, 208, 132, 0.3)',
        'eco-glow-strong': '0 0 40px rgba(0, 208, 132, 0.5)',
      },
      animation: {
        'pulse-eco': 'pulse-eco 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-eco': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
