var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

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
	        use: ExtractTextPlugin.extract({
	          	fallback: "style-loader",
	          	use: "css-loader"
        		})
      		}
	      // 	{
	      //   test: /\.css$/,
	      //   use: [ 'style-loader', 'css-loader' ]
	      // }
	    ]
	  },

	plugins: [

			new HtmlWebpackPlugin({  
			      title: 'wristo-project',
			      minify: {
			      		collapseWhitespace: true
			      },
			      hash: true,
			      template: './src/index.html'
			    }),

			new ExtractTextPlugin("styles.css")
			]
}