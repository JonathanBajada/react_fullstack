if (process.env.NODE_ENV === 'producton') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}
