const { override, addWebpackModuleRule, addWebpackResolve, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'ts-loader']
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, './src')
    }),
    addWebpackResolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    })
  )
};
