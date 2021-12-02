/*
 * @Description:
 * @version: 1.0.0
 * @Author:
 * @Date: 2021-12-02 17:10:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-02 17:56:17
 */

const fs = require('fs')

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET')) {
            var path = url.substring(4)
            router.get(path, mapping[url])
        } else if (url.startsWith('POST')) {
            var path = url.substring(5)
            router.get(path, mapping[url])
        }
    }
}
function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir)
        .filter((f) => {
            return f.endsWith('.js')
        })
        .forEach((f) => {
            let mapping = require(__dirname + '/' + dir + '/' + f)
            addMapping(router, mapping)
            console.log(mapping, 'mapping')
        })
}
module.exports = function (dir) {
    let controllers_dir = dir || 'controller',
        router = require('koa-router')()
    addControllers(router, controllers_dir)
    return router.routes()
}
