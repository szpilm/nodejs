const os = require("os");
const path = require("path");

// 获取当前机器的CPU信息
console.log(os.cpus());

// 获取内存
console.log(os.totalmem());

// 获取扩展名
console.log(path.extname("a.txt"));
