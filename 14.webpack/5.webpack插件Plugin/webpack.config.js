const path = require('path');
const webpack=require('webpack');
const htmlWebpack=require('html-webpack-plugin')
const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 对应路径
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // 限制大小
            options: {
              limit: 1300,
              // 把图片名字有规范的打包到dist 
              name: 'img/[name].[hash:8].[ext]'
            },
          },

        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },{
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: ['vue-loader']
      }]
  },
  plugins:[
    // 加一个版权注释，在bundle.js查看
    new webpack.BannerPlugin('最终版权归coderwhy所有'),
    new htmlWebpack({template:'index.html'}),
    new uglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
  // resolve: {
  //   alias: {
  //     'vue': 'vue/dist/vue/esm.js'
  //   }
  // }
}