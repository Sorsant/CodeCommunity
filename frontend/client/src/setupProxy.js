const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://loved-vein-production.up.railway.app',
			changeOrigin: true,
		})
	);
};
