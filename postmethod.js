import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let URL_ENCODED = "application/x-www-form-urlencoded";
    // ==================start urlencoded===========
    if (req.headers["content-type"] === URL_ENCODED) {
      let body = "";
      req.on("data", chunk => {
        body += chunk;
      });
      req.on("end", _ => {
        console.log(body);
        res.end(`successfully looged in ${body}`);
      });
    } else {
      res.end(null);
    }
    //   =================end=======================
  } else {
    if (req.url === "" || req.url === "/") {
      res.setHeader("content-type", "text/html");
      fs.createReadStream("./post.html", "utf-8").pipe(res);
    } else if (req.url === "/style.css") {
      res.setHeader("content-type", "text/css");
      fs.createReadStream("./post.css", "utf-8").pipe(res);
    } else {
      res.end(`<h1 style="color:red">Page not found</h1>`);
    }
  }
});
server.listen(5000, err => {
  if (err) throw err;
  console.log("server is running on port number is 5000");
});
