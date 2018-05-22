// Use this file for configuring WebStorm module resolve

const path = require('path');
module.exports = {
	resolve: {
		extensions: [ '.js', '.pug', '.scss', '.css' ],
		alias: {
			'@': path.join(__dirname, 'src')
		}
	}
}