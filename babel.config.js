// babel.config.js
module.exports = {
  plugins: ["@babel/plugin-syntax-dynamic-import"],
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
