/*
 * @Description:deal with url using koa-router
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 16:09:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 16:27:30
 */
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method}:${ctx.request.url}`)
    await next()
})
router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name
    console.log(ctx.params)
    ctx.response.body = `${name}`
})
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index</h1>'
})
app.use(router.routes())
app.listen(4000)
console.log('app started at 4000...')
