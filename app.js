'use strict'
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');