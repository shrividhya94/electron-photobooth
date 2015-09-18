module.exports = {
  entry: './app',
  output: {
    path: 'builds',
    filename: 'media.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?stage=0'
      }
    ]
  },
}
