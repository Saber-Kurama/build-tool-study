const MyExampleWebpackPlugin = require("./index");

module.exports = {
  mode: "development",
  entry: "./src/entry.js",
  plugins: [new MyExampleWebpackPlugin()],
};
