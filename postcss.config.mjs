/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
  },
}

export default config
