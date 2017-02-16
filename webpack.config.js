/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const config = {
  devtool: 'inline-source-map',
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?outputStyle=expanded',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: [
            "es2015",
            "react",
            "airbnb"
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  postcss: [
    autoprefixer,
  ],
};

module.exports = config;