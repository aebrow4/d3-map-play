const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
