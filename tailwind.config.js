/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        accent: '#6366F1',
        surface: '#F8FAFC',
        border: '#E5E7EB',
        ink: '#111827',
        muted: '#6B7280',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,.07), 0 1px 2px -1px rgba(0,0,0,.05)',
        elevated: '0 4px 24px 0 rgba(79,70,229,.10)',
      },
    },
  },
  plugins: [],
};
