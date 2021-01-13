const http = require("http");
const fs = require("fs");

const server = http.createServer();

const wwwDir = "E:/WebProject/nodejs";
server.on("request", (req, res) => {
//   const url = req.url;

  let filePath = "/apache/catalog.html";
  /* if (url !== "/") {
    filePath = url;
  } */

  console.log(wwwDir + filePath);
  fs.readFile(wwwDir + filePath, (err, data) => {
    if (err) {
      return res.end("404 Not Found");
    }
    return res.end(data);
  });
});

server.listen(3001, () => {
  console.log("服务启动了，请打开 http://127.0.0.1:3001 进行访问..");
});
