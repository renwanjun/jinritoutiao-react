/*
*__dirname 是node.js中的一个全部变量，它指向当前执行脚本所在的目录
*
*/

var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 项目根路径
// 项目源码路径
// 产出路径

module.exports={
	entry:__dirname+"/src/index.js",  //唯一入口文件
	output:{
		path:__dirname+"/public",   // 打包后文件存放的地方
		// publicPath: '/assets/',
		filename:"bundle-[hash].js"       // 打包后输出文件的文件名
	},
    devtool:'none',       //配置生成Source Maps（使调试更容易），有四种选项选择合适的选项
    devServer: {   //让你的浏览器监测你的代码的修改，并自动刷新修改后的结果
        // proxy: {
        // 	"/api/*": {
        // 		target: "https://cnodejs.org",
        // 		secure: false
        // 	}
        // },
        // port:8888,
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新,当源文件改变时会自动刷新页面
        hot:true
    },
	module:{                      
		loaders: [
          {
            test: /\.json$/,
            loader: "json-loader"
          },{      // 配置babel
			  test:/(\.jsx|\.js)$/,   // 允许使用ES6和JSX语法
			  exclude:/node_modules/,  //屏蔽不需要处理的文件夹
			  loader:"babel-loader",   //在webpack的module部分的loaders里进行配置即可
			//   query:{
			// 	  presets:['es2015','react']   // 自动识别.babelrc文件中的内容
			//   }
		  },{
			  test:/\.css$/,
			  loader:"style-loader!css-loader?modules|postcss-loader"
		  },{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader' //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
	     	}
         ]
	},
	plugins:[
		new webpack.BannerPlugin('renwanjun版权所有，翻版必究'),  // 版权声明插件
		new HtmlWebpackPlugin({
			template:__dirname+"/src/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
		// ,new webpack.HotModuleReplacementPlugin()   //  热加载插件
		// ,new webpack.LoaderOptionsPlugin({
		// 	options:{
		// 		postcss:function(){
		// 			return [precss,autoprefixer];
		// 		}
		// 	},
		// 	devServer: {   //让你的浏览器监测你的代码的修改，并自动刷新修改后的结果
		// 		// proxy: {
		// 		// 	"/api/*": {
		// 		// 		target: "https://cnodejs.org",
		// 		// 		secure: false
		// 		// 	}
		// 		// },
		// 		// port:8888,
		// 		contentBase: "./public", //本地服务器所加载的页面所在的目录
		// 		colors: true, //终端中输出结果为彩色
		// 		historyApiFallback: true, //不跳转
		// 		inline: true, //实时刷新,当源文件改变时会自动刷新页面
		// 		hot:true
		// 	}
		// })
	],
}