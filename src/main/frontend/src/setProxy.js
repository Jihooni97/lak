// src/main/frontend/src/setProxy.js

const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/lak',
        createProxyMiddleware({
            // 서버 URL or localhost:설정한포트번호
            target: 'http://http://localhost:3000',
            changeOrigin: true,
        })
    );
};