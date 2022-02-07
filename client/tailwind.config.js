module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: ["hover", "focus"],
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
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
      
    },
  },
  variants: {},
  plugins: [],
}
