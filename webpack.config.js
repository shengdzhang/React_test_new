module.exports = {
  context: __dirname,
  entry: "./app/assets/frontend/test.js.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};