var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
var path = require('path');

var isProd = process.env.NODE_ENV === 'production';// true or false
var cssDev = ['style-loader', 'css-loader'];
var cssProd = ExtractTextPlugin.extract({
				fallback: "style-loader",
	          	use: "css-loader"
});

var cssConfig = isProd ? cssProd : cssDev; 

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
    	filename: 'bundle.js'
	},

	module: {
	    rules: [
	      	{
	        	test: /\.css$/,
	        	use: cssConfig
      		},

      		{
      			test: /\.js$/,
      			exclude: /node_modules/,
      			use: 'babel-loader'
      		},

		 	{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
						{
			            	loader: 'file-loader',
			            	options: {
			            	name: '[name].[ext]',
			            	outputPath: 'assets/images/',
			            	//publicPath: 'assets/images/'

			            			}  
		          		}, 
		          		{
		          			loader: 'image-webpack-loader'	
		          		}
				  	]
			},

			{
		     	test: /\.(png|jpg|)$/,
		      	loader: 'url-loader?limit=200000'
		    }
	    ]
	  },

  	devServer: {
		  contentBase: path.join(__dirname, "dist"),
		  //compress: true,
		  hot: true,
		  stats: "errors-only",
		  open: true
	},

	plugins: [

			new HtmlWebpackPlugin({  
			      title: 'wristo-project',
			      // minify: {
			      // 		collapseWhitespace: true
			      // },
			      hash: true,
			      template: './src/index.html'
			    }),

			new ExtractTextPlugin({
				filename: "styles.css",
				disable: !isProd
			}),
			new webpack.NamedModulesPlugin(),
     		new webpack.HotModuleReplacementPlugin()
			]
}