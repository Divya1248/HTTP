// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   // set header
//   res.setHeader("content-type", "text/html");
//   fs.readFile("./index.html", "utf-8", (err, data) => {
//     if (err) throw err;
//     res.end(data); //ending req/ res cycle
//   });
// });

// server.listen(5000, err => {
//   if (err) throw err;
//   console.log("server is listening on port number 5000");
// });

// webserver and fs
// const http = require("http");
// const fs = require("fs");
// // create web server
// const server = http.createServer((req, res) => {
//   if (req.url === "" || req.url === "/") {
//     // set header
//     res.setHeader("content-type", "text/html");
//     // response body
//     fs.createReadStream("./index.html", "utf-8").pipe(res);
//   } else if (req.url === "/style.css") {
//     res.setHeader("content-type", "text/css");
//     // response body
//     fs.createReadStream("./style.css", "utf-8").pipe(res);
//   } else {
//     res.end(`<h1 style="color:red">Page not found</h1>`);
//   }
// });

// let port = 8000;
// server.listen(port, err => {
//   if (err) throw err;
//   console.log("seerver is running on port number", port);
// });

// audio and vedio
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // set header
  //   res.setHeader("content-type", "audio/mp3");
  //   let data = fs.readFileSync("./");
  //   res.end(data, "binary");

  res.setHeader("content-type", "video/mp4");
  let vedio = fs.readFileSync("");
  res.end(vedio);
});
server.listen(4000, err => {
  if (err) throw err;
  console.log("app is running on port number 4000");
});
