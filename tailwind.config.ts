// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to your file structure
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#B45309',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        danger: '#DC2626',
        success: '#16A34A',
        info: '#0EA5E9',
      },
    },
  },
  plugins: [],
};
