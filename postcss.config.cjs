const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    postcssImport(),
    postcssNested(),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer({
      cascade: true,
    }),
    !dev && cssnano({
      preset: "default",
    })
  ],
};

module.exports = config;