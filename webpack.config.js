const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle[hash].js'
	},
	devServer: {
		contentBase: './dist',
		port: '8080',
		host: 'localhost'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src')
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '网易新闻首页',
			template: path.join(__dirname, './src/index.tmpl.html'),   //指定模板页面
			//将来会根据此页面生成内存中的页面
			filename: 'index.html',   //指定生成页面的名称，index.html浏览器才会默认直接打开,
			//html压缩
			minify: {
				//删除注释
				removeComments: true,
				//删除空格
				collapseWhitespace: true
			}
		}),
		new CleanWebpackPlugin() // 打包之前先清除原文件
	],
	mode: "development"

};