/*
 * @Description:deal with post
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 16:55:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 16:57:28
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())
