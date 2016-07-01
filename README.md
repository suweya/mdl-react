# webpack

## [webpack-handbook](http://zhaoda.net/webpack-handbook/configuration.html)

## [react-and-webpack](http://www.infoq.com/cn/articles/react-and-webpack?utm_source=tuicool)

## webpack.config.js

```js
module.exports= {
	
	// 入口文件
	entry: [
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/only-dev-server',
		'./src/main.js'
    ],

    // 输出文件
	output: {
		// filename: 打包后的文件名
		filename: 'bundle.js', 
		//path: 打包文件存放的绝对路径
		path: path.join(__dirname, 'static'),
		// publicPath: 网站运行时的访问路径
    	publicPath: '/static/'
	},

	module: {
	    loaders:[
	      {
	        test: /\.js[x]?$/,
	        include: path.join(__dirname, 'src'),
	        loaders: ['react-hot', 'babel-loader']
	      },
	      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
	    ]
  	},

  	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
    	new webpack.HotModuleReplacementPlugin()
  	]
}
``` 
#package.json

-  "dev": "webpack-dev-server --progress --colors --port 8090 --hot --inline"

- babel-loader?presets[]=es2015&presets[]=react