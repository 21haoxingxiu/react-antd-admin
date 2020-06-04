/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-04 18:11:57
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-04 18:14:27
 */ 
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/', { target: 'http://10.200.10.173:8081' }));
};