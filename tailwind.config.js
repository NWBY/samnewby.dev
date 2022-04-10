const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./templates/**/*.html", "./theme/**/*.html"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
