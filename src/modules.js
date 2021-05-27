/* 
    模块化
    require()可以传递路径作为参数
     -在node中一个js文件就是一个模块
     -每一个js文件中的js代码都是独立运行在一个函数中
        而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问

*/

const md = require('./test')
console.log(md)
