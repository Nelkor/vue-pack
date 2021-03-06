import { resolve } from 'path'

import { DefinePlugin, Configuration } from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { VueLoaderPlugin } from 'vue-loader'

export const basicConfig: Configuration = {
  target: 'web',
  entry: resolve('src/main.ts'),
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': resolve('src'),
    },
  },
}

export const basicRules = [
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
]

export const basicPlugins = [
  new VueLoaderPlugin(),
  new HtmlPlugin({ template: resolve('src/index.html') }),
  new DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: resolve('src/favicon.svg'),
        to: resolve('dist'),
      }
    ],
  }),
]
