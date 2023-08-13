module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ["macros", "@babel/plugin-syntax-jsx"],
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react"],
      ["next/babel"],
    ],
  };
};
