module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens :{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
    extend: {
      fontSize: ["hover", "focus"],
      colors: {
        light: "#e2f3f5",
        teal: "#22d1ee",
        dark: "#0e153a",
    },
      backgroundImage:{
        'todobg':"url('/src/assets/todobg.jpg')",
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-1deg)'
            },
            '50%': {
                transform: 'rotate(1deg)'
            },
        },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'gradient-x':'gradient-x 5s ease infinite',
      }
      
    },
  },
  variants: {},
  plugins: [],
}
