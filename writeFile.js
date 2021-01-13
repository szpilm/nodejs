const fs = require("fs");

/* 
    @params url 文件路径
    @params content 写入内容
    @params callback 回调函数
*/
fs.writeFile("./data/hello.txt", "写入操作", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("文件写入成功");
  }
});
