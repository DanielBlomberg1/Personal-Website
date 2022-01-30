module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'todobg':"url('/src/assets/todobg.jpg')",
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-2deg)'
            },
            '50%': {
                transform: 'rotate(2deg)'
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
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
      
    },
  },
  variants: {},
  plugins: [],
}
