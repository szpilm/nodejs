// require两个作用：
// 1、加载文件模块并执行文件内的代码
// 2、拿到加载文件模块的一个导出对象

const b = require("./b");

console.log(b.foo);

console.log(b.add(10, 20));
