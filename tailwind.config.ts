import type { Config } from "tailwindcss"
import {fontFamily} from "tailwindcss/defaultTheme"

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        customback:"#020817",
        background: "#020817",  //"hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fadeInOut": {
          '0%, 100%': { opacity:"0" },
          '50%': { opacity: "1" },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    
      backgroundImage: {
        'graph-paper': `
          linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'graph-paper': '20px 20px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),

  ],
} satisfies Config




// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
//         'float': 'float 6s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeInOut: {
//           '0%, 100%': { opacity: 0 },
//           '50%': { opacity: 1 },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//       backgroundImage: {
//         'graph-paper': `
//           linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
//           linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)
//         `,
//       },
//       backgroundSize: {
//         'graph-paper': '20px 20px',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     require('tailwindcss-animate'),

//   ],
// }