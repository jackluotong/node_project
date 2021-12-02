/*
 * @Description:
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 17:25:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 17:58:38
 */
var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>index</h1>
    <form action="/sign" method="post">
    <p>name:<input name="name" value="koa"></p>
    <p>password:<input name="password" value="password"></p>
    <p><input type="submit" value="submit"></p>
    </form >`
}
var fn_sign = async (ctx, next) => {
    await next()
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>${name}</h1>`
    } else {
        ctx.response.body = `<h1>login failed</h1>
        <p><a href=''>try again</a></p>`
    }
}
module.exports = {
    'GET /': fn_index,
    'POST /sign': fn_sign,
}
