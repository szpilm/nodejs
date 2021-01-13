const fs = require("fs");

/* 
  @params url 文件路径
  @params callback 回调函数
*/
fs.readFile("./data/hello.txt", function (err, data) {
  if (err) {
    console.log("读取文件失败");
  } else {
    console.log(data.toString());
  }
});
