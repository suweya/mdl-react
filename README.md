# react and webpack

## webpack

### [webpack-handbook](http://zhaoda.net/webpack-handbook/configuration.html)

### [react-and-webpack](http://www.infoq.com/cn/articles/react-and-webpack?utm_source=tuicool)

### webpack.config.js

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

## 热替换 

### [react-hot-loader](http://gaearon.github.io/react-hot-loader/getstarted/)

### [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate)

### Note 

- webpack.config.js

```js
module: {
	    loaders:[
	      {
	        test: /\.js[x]?$/,
	        include: path.join(__dirname, 'src'),
	        loaders: ['react-hot', 'babel-loader'] // 是loaders不是loader
	      },
	      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
	    ]
  	},
```

## package.json

-  "dev": "webpack-dev-server --progress --colors --port 8090 --hot --inline"

- babel-loader?presets[]=es2015&presets[]=react

## [babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)

## eslint

- `npm install -g eslint`
- `npm install -g eslint-plugin-react`
- 'eslint --init'
- 'eslint src'