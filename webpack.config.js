'use strict';

let path = require('path');

var config = {
	mode: 'development',
	watch: true,

	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									debug: true,
									corejs: 3,
									useBuiltIns: 'usage',
								},
							],
						],
					},
				},
			},
		],
	},
};

var mainConfig = Object.assign({}, config, {
	name: 'main',
	entry: './src/js/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist/js',
	},
});
var toursConfig = Object.assign({}, config, {
	name: 'tours',
	entry: './src/js/scriptTours.js',
	output: {
		path: __dirname + '/dist/js',
		filename: 'scriptTours.js',
	},
});
var newPageConfig = Object.assign({}, config, {
	name: 'new-page',
	entry: './src/js/scriptNewPage.js',
	output: {
		path: __dirname + '/dist/js',
		filename: 'scriptNewPage.js',
	},
});
module.exports = [mainConfig, toursConfig, newPageConfig];

/* module.exports = {
	mode: 'development',
	entry: './src/js/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist/js',
	},
	watch: true,

	devtool: 'source-map',

	module: {},
}; */
