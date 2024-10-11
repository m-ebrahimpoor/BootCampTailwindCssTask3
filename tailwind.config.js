module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["vazir"],
        },

        colors: {
          // Configure your color palette here
          'white': '#FFFFFF',
          'secondary-800': '#3F4264',
          'secondary-900': '#2A2D53',
          'primary-900': '#4A6DFF',
          'secondary-100': '#36385380',
          'red': '#FF0000CC',
          'primary-100': '#DFDFE580',
          'secondary-400': '#4A6DFF',
        },

        fontSize: {
          'tiny': '0.5rem', // 8px
          sm: '0.875rem',
          base: '1rem',
          xl: '1.25rem',
          xs: '0.7rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
        },
      },
    },
    plugins: [],
  }