/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['bg-my-light-blue', 'bg-my-medium-blue', 'bg-my-dark-blue'],
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'my-light-blue': '#A9B2BB',
        'my-medium-blue': '#546677',
        'my-dark-blue': '#191F24',
        'my-medium-orange': '#FE7F2D',
        'my-light-beige': '#E4D5C2',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        '4xl': '32px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      zIndex: {
        'section': '-5',
        'container': '0',
        'decor': '-3',
        'text': '3',
        'image': '5',
        'hover-image': '6',
        'button': '10',
        'nav': '20'
      },
      screens: {
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1100': '1100px',
        '1150': '1150px',
        '1200': '1200px',
        '1250': '1250px',
        '1300': '1300px',
        '1350': '1350px',
        '1400': '1400px',
        '1450': '1450px',
        '1500': '1500px',
      },
      gap: {
        '16x4x32': 'clamp(16px, 4vw, 32px)',
        '16x4x24': 'clamp(16px, 4vw, 24px)',
      },
      padding: {
        '16x4x32': 'clamp(16px, 4vw, 32px)',
        '16x8x32': 'clamp(16px, 8vw, 32px)',
      },
      fontSize: {
        'h1': 'clamp(40px, 4.5vw, 64px)',
        'h1-para': 'clamp(18px, 2.2vw, 32px)',
        'h2': 'clamp(32px, 2.75vw, 40px)',
        'h4': 'clamp(24px, 2.2vw, 32px)',
        'brow': 'clamp(14px, 1.1vw, 16px)',
        'button': 'clamp(14px, 1.1vw, 16px)',
        'para': 'clamp(16px, 1.24vw, 18px)',
      },
      plugins: [require("tailwindcss-animate")],
      width: {
        'photo-spread': 'clamp(350px, 100vw, 1100px)',
        'photo-29': 'clamp(100px, 29vw, 415px)',
      }
    }
  }
}