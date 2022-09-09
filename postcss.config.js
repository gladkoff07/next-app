/** @type {import('tailwindcss').Config} */

const { join } = require('path')

module.exports = {
  content: [],
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
}
