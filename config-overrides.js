const { override, addWebpackModuleRule, addWebpackResolve, addWebpackAlias, overrideDevServer } = require('customize-cra');
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
  ),
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      // 服务开启gzip
      compress: true,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7001',
          changeOrigin: true
          // pathRewrite: {
          //   '^/api': '/'
          // }
        }
      }
    };
  })
};
