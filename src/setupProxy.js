/**
 * 代理跨域配置
 */
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    // 一般使用
    // proxy('http://localhost:2000')

    proxy('/api', {
      target: `http://10.200.10.166:8081`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
