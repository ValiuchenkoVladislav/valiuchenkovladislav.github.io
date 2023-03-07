const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "index.js",
    path: __dirname + "/build"
  },

  devServer: {
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new HTMLPlugin({
      template: "./src/index.html"
    })
  ],

  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.webp$/,
        type: "asset/resource"
      }
    ]
  }
}
