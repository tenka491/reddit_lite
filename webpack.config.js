const config = {
  entry: "./main.js",
  output: {
    filename: "index.js"
  },
  devServer: {
    inline: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};

module.exports = config;
