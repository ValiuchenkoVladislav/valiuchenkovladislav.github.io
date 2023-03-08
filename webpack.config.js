const HTMLPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


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
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images/icons/logo.webp" }
      ]
    })
  ],

  resolve: {
    extensions: [".js", ".ts", ".tsx"],

    plugins: [new TsconfigPathsPlugin()]
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
