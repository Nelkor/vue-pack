import { Configuration } from 'webpack'

import { basicConfig, basicPlugins, basicRules } from './base'

const makeUrl = schema => `${schema}://localhost:3063`

const dev: Configuration = {
  ...basicConfig,

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 6677,
    hot: true,
    proxy: {
      '/api': {
        target: makeUrl('http'),
      },
      '/realtime-connection': {
        target: makeUrl('ws'),
        ws: true,
      },
    },
  },
  module: {
    rules: [
      ...basicRules,

      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [...basicPlugins],
}

// noinspection JSUnusedGlobalSymbols
export default dev
