const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "src") + '/client.js',
  output: {
    filename: './client.bundle.js',
  },

  module: {
    rules: [
      {
        // babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          },
        },
      },
    ],
  },
}
