/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2A4A",
          light: "#123A66",
          dark: "#071C33",
        },
        secondary: {
          DEFAULT: "#1E5BDA",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        accent: {
          DEFAULT: "#2EC4B6",
          light: "#5EEAD4",
          dark: "#0D9488",
        },
        surface: "#F8FAFC",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(11, 42, 74, 0.06)",
        medium: "0 8px 30px rgba(11, 42, 74, 0.12)",
        card: "0 2px 12px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
}
