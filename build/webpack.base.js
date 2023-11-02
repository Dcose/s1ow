// ! webpack.base.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')

let progressPlugin = new WebpackBar({
  color: '#85d', // 默认green，进度条颜色支持HEX
  basic: false, // 默认true，启用一个简单的日志报告器
  profile: false // 默认false，启用探查器。
})

module.exports = {
  // 入口文件
  entry: path.join(__dirname, '../src/index.tsx'),

  // 打包文件出口
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },

  // 配置模块
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: ['@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i, // 匹配css和scss文件
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // 配置css3前缀
          'postcss-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|webp)$/, // 匹配图片文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/images/[name][ext]' // 文件输出目录和命名
        }
      }
    ]
  },

  // 配置解析模块
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },

  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
      favicon: './public/favicon.ico'
    }),

    // 配置环境变量
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    }),

    // 好看的进度条~！
    progressPlugin
  ]
}
