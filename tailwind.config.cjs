
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",

  ],
  plugins: [
    require('flowbite/plugin')

  ],
  darkMode: 'class',
};