/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 100,
  endOfLine: "lf",
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "es5",
  jsxSingleQuote: false,
  semi: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
