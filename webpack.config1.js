/*
*__dirname 是node.js中的一个全部变量，它指向当前执行脚本所在的目录
*
*/

const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 项目根路径
// 项目源码路径
// 产出路径

module.exports = {
	entry: path.resolve(__dirname + "./src/index.js"),  //唯一入口文件
	output: {
		path: path.resolve(__dirname + "/dist"),
		// publicPath: '/assets/',     // 上线时配置的是cdn的地址
		filename: "bundle-[hash].js"       // 打包后输出文件的文件名
	},
	devtool: 'eval-source-map',       //配置生成Source Maps（使调试更容易），有四种选项选择合适的选项
	devServer: {   //让你的浏览器监测你的代码的修改，并自动刷新修改后的结果
		// proxy: {
		// 	"/api/*": {
		// 		target: "https://cnodejs.org",
		// 		secure: false
		// 	}
		// },
		port:8082,
		host:'localhost',
		contentBase: "./dist", //本地服务器所加载的页面所在的目录
		colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true, //实时刷新,当源文件改变时会自动刷新页面
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader",
				include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
			}, {      // 配置babel
				test: /\.jsx?$/,   
				use:['@babel/env','@babel/react'],
				include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
			}, {
				test: /\.css$/,   // 匹配处理文件的扩展名正则表达式
				use:['style-loader','css-loader'],  // loader名称
				exclude:/node_modules/,  // include/exclude 手动指定必须处理的文件夹或屏蔽不需要处理的文件夹
				include:path.resolve(__dirname,'./src')
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader' //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
			},{
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 当图片小于limit的时候会把图片Base64编码，大于limit参数的时候还是使用file-loader进行拷贝
                            outputPath: 'images'
                        }
                    }
                ]
            }
		]
	},
	plugins: [
		// new webpack.BannerPlugin('renwanjun版权所有，翻版必究'),  // 版权声明插件
		new HtmlWebpackPlugin({
			template: __dirname + "/src/index.tmpl.html"
		}),
		// new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.optimize.UglifyJsPlugin(),
		// new ExtractTextPlugin("style.css")
	],
}