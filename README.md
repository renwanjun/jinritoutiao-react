#简介
工程提供便利的编译、刷新、压缩、打包功能

#工程启动
1.npm install
2.开发环境启动  webpack-dev-server   或者  npm run dev

#webpack打包方式 解读
方法一：webpack {entry file}  {destination for bundled file}
// {extry file}处填写入口文件的路径，本文中就是上述main.js的路径，
// {destination for bundled file}处填写打包文件的存放路径
// 填写路径的时候不用添加{}
例如 webpack ./src/main.js ./public/bundled.js
PS:如果你的webpack非全局安装，在使用webpack的时候需要额外制定其再node_modules中的地址
例如 node_modules/.bin/webpack
方法二：
定义一个配置文件webpack.config.js,将涉及到的打包信息放在里面，这个配置文件其实也是一个JavaScript模块。如此，打包文件只需要运行webpack，这条命令会自动医用webpack.config.js文件的配置选项。
webpack
3.npm build

#使用webpack构建本地服务器
可以让浏览器监听你的代码修改，并自动刷新显示修改后的结果，但是需要单独安装它作为项目依赖

webpack.config.js文件解读

#产品阶段的构建
创建一个webpacl.production.config.js
webpack提供了一些再发布阶段非常有用的优化插件，它们大多来自于webpack社区，可以通过npm 安装，通过如下插件可以完成产品发布阶段所需的功能。
OccurenceOrderPlugin   （非内置插件）
UglifyJsPlugin 压缩js代码  （内置插件）
ExtractTextPlugin 分离CSS和JS文件 （内置插件）

安装非内置插件 
npm install --save-dev extract-text-webpack-plugin

