/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['bg-my-light-blue', 'bg-my-medium-blue', 'bg-my-dark-blue', 'bg-my-gallery-gradient', 'bg-my-medium-beige', 'bg-my-about-gradient', 'bg-my-light-beige', 'bg-my-pale-beige', 'bg-my-light-blue-gradient'],
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
        'my-pale-beige': '#F3EEE8',
        'my-light-beige': '#E4D5C2',
        'my-medium-beige': '#B5B1AF',
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
        '40x6x80': 'clamp(40px, 6vw, 80px)',
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
      },
      backgroundImage: {
        'my-gallery-gradient': "linear-gradient(334deg, #7F807B 0%, #B5B1AF 41.77%, rgba(181, 177, 175) 100%)",
        'my-about-gradient': 'linear-gradient(334deg, #A6A29E -100%, #CCC8C3 0%, #F3EEE8 100%)',
        'my-light-blue-gradient': 'linear-gradient(289deg, #7E8FA0 -84.44%, #A9B2BB -5.23%, rgba(169, 178, 187, 1) 100%)'
      }
    }
  }
}