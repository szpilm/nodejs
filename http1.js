const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  if (url === "/") {
    fs.readFile("./resource/index.html", (err, data) => {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(data);
      }
    });
  } else if (url === "/daisy") {
    fs.readFile("./resource/daisy.jpg", (err, data) => {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else if (url === "/txt") {
    fs.readFile("./resource/hello.txt", (err, data) => {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end(data);
      }
    });
  }
});

server.listen(3001, () => {
  console.log("服务启动了...");
});
