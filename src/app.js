/*
 * @Description:
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 17:04:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 17:15:33
 */
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const router = require('koa-router')()
const controller = require('./controller')
const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method}${ctx.request.url}`)
    await next()
})

app.use(bodyParser())

app.use(controller())

app.listen(4001)

console.log('app started at 4001')
