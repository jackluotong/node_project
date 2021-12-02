/*
 * @Description:
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 11:52:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 15:38:45
 */
/* 
    模块化
    require()可以传递路径作为参数
    -在node中一个js文件就是一个模块
    -每一个js文件中的js代码都是独立运行在一个函数中
    而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
*/

const md = require('koa')
const app = new md()
app.use(async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.body = 'hello world1'
    await next()
})
app.use(async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    // ctx.response.type = 'text/html'
    // ctx.body = 'hello world2'
    console.log(`Time:${ms}`)
})
app.use(async (ctx, next) => {
    // await next()
    ctx.response.type = 'text/html'
    ctx.body = 'hello world3'
})
app.listen(3032)
console.log('started at port:3032')
