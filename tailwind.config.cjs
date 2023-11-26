const { withMaterialColors } = require('tailwind-material-colors');
const withMT = require("@material-tailwind/html/utils/withMT");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ['"Roboto Flex Variable"', "ui-sans-serif"]
    },
    extend: {

    },
  },

  plugins: [],
};


module.exports = withMT(
  withMaterialColors(config, {
    // Here, your base colors as HEX values
    // primary is required
    primary: '#082dff',
    // secondary and/or tertiary are optional, if not set they will be derived from the primary color
    secondary: '#ffff00',
    tertiary: '#0000ff',
  })
);
