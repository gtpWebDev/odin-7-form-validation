const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // webpack builds based on dependencies from this file
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  // optimization: { // avoids issues should there be multiple entry points, only use then
  //   runtimeChunk: 'single',
  //  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans up the dist directory on each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Page Title",
      template: "./src/template.html",
    }),
  ],
};
