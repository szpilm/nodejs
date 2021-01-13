const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("收到请求了，请求路径：" + req.url);
  let data;
  const url = req.url;
  switch (url) {
    case "/":
      data = "index page";
      break;
    case "/login":
      data = "login";
      break;
    case "/register":
      data = "register";
      break;
    default:
      data = "404 Not Found";
      break;
  }
  res.end(data);
});

server.listen(3001, () => {
  console.log("服务启动了，请打开 http://127.0.0.1:3001 进行访问..");
});
