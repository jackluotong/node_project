/*
 * @Description:
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 17:23:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 17:24:20
 */

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name
    ctx.response.body = `<h1>${name}</h1>`
}
module.exports = {
    'GET /hello/:name': fn_hello,
}
