import fs from 'fs';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import postCssConfig from './config/postcss.config';
import { resolve } from './webpack.aliases';

export default function (env = {}, argv) {
  const context = path.resolve(__dirname, 'src');
  const templateEntriesDir = path.resolve(context, 'templates/pages');
  const templates = fs.readdirSync(templateEntriesDir).map(file => file.split('.pug')[ 0 ]);
  return {
    context: context,
    devServer: {
      contentBase: path.resolve(__dirname, 'assets')
    },
    devtool: 'source-map',
    entry: {
      'js/main': './scripts/main.js',
    },
    externals: {
      jquery: "jQuery"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ],
            plugins: [
              'transform-object-rest-spread',
              'transform-es2015-spread'
            ]
          }
        },
        {
          test: /\.s?css$/,
          exclude: /(node_modules)/,
          include: path.resolve(context, 'styles'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  // https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-204607491
                  importLoaders: 3,
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: postCssConfig
              },
              'resolve-url-loader',
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'compact',
                  sourceMap: true,
                  sourceComments: true
                }
              }
            ]
          })
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
      ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets')
    },
    plugins: [
      new ExtractTextPlugin('css/main.css'),
      new webpack.optimize.CommonsChunkPlugin({
        async: true,
        name: "manifest",
        minChunks: Infinity
      }),
      ...templates.map(file =>
        new HtmlWebpackPlugin({
          filename: `${file}.html`,
          template: `${templateEntriesDir}/${file}.pug`,
          minify: false
        })
      )
    ],
    resolve
  }
}