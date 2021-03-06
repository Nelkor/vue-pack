import { resolve } from 'path'

import { Configuration } from 'webpack'
import MiniCssPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import { basicConfig, basicPlugins, basicRules } from './base'

const prod: Configuration = {
  ...basicConfig,

  mode: 'production',
  output: {
    filename: '[contenthash].js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      ...basicRules,

      {
        test: /\.s[ac]ss$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...basicPlugins,

    new CleanWebpackPlugin(),
    new MiniCssPlugin({ filename: '[contenthash].css' }),
  ],
}

// noinspection JSUnusedGlobalSymbols
export default prod
