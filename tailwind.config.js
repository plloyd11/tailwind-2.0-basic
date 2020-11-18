const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'warm-gray': colors.warmGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
