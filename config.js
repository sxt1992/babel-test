module.exports = {
    mode: 'production',
    entry: './index.js',
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
    }
}