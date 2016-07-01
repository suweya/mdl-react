var webpack = require('webpack');
var path = require('path');

module.exports= {

	entry: [
		'./src/main.js',
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:8080'
    ],

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'static'),
    	publicPath: '/static/'
	},

	module: {
	    loaders:[
	      {
	        test: /\.js[x]?$/,
	        include: path.join(__dirname, 'src'),
	        loader: 'babel-loader?presets[]=es2015&presets[]=react'
	      },
	      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
	    ]
  	},

  	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
    	new webpack.HotModuleReplacementPlugin()
  	]
}