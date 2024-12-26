import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInBackground: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8) rotate(0deg)',
          },
          '100%': {
            opacity: '0.7',
            transform: 'scale(1) rotate(var(--rotate))',
          },
        },
      },
      animation: {
        fadeInBackground: 'fadeInBackground 2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
