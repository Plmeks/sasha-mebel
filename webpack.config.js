const path = require('path');

module.exports = {
  entry: './client/layouts/base.ts',
  mode: 'development',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: [/node_modules/],
      options: {
        configFile: "tsconfig.client.json"
      }
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, 'build/public/scripts/'),
    publicPath: '/scripts/', // чтобы находить чанки
    chunkFilename: 'chunks/[name].js',
    filename: 'bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
