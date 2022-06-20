const {
  override,
  addWebpackModuleRule,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ["babel-loader", "ts-loader"],
    }),
    addWebpackResolve({
      alias: { "@": path.resolve(__dirname, "./src") },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    })
  ),
};
