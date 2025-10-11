import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['open   sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "#FFFFFF", // light gray
        input: "#F3F4F6", // gray-100
        ring: "#3B82F6", // blue-500
        background: "#FFFFFF", // white
        foreground: "#111827", // gray-900
        primary: {
          DEFAULT: "#1E40AF", // blue-800
          foreground: "#FFFFFF", // white text on primary
        },
        secondary: {
          DEFAULT: "#184c64",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#DC2626", // red-600
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#9CA3AF", // gray-400
          foreground: "#111827",
        },
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          foreground: "#111827",
        },
        popover: {
          DEFAULT: "#F9FAFB", // gray-50
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        sidebar: {
          DEFAULT: "#1F2937", // gray-800
          foreground: "#FFFFFF",
          primary: "#3B82F6",
          "primary-foreground": "#FFFFFF",
          accent: "#F59E0B",
          "accent-foreground": "#111827",
          border: "#374151",
          ring: "#3B82F6",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
       'gradient-primary': 'linear-gradient(to right, rgb(9, 80, 96), #184c64)',

        'gradient-hero': 'linear-gradient(to right,rgb(53, 18, 85),rgb(27, 5, 78))',
        'gradient-accent': 'linear-gradient(to right, #F59E0B,rgb(255, 175, 1))',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.1)',
        hero: '0 10px 15px rgba(0,0,0,0.2)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
