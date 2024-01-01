// bir istek alacağız ve bu istek doğrultusunda sunucu bize veri gönderecek
const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    //gelen isteği elde etmek lazım
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname + ".html";
    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead(404,{"Content-Type" : "text/plain"});
        return res.end("404 Page Not Found !");
      }
      res.writeHead(200,{"Content-Type" : "text/html"});
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
