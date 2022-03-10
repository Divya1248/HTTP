// import { createServer } from "http";
// import { createReadStream } from "fs";

// createServer((req, res) => {
//   let employees = [
//     {
//       emp_name: "manu",
//       emp_id: "typ1",
//       emp_sal: 20000,
//       emp_designation: "node developer",
//     },
//     {
//       emp_name: "shashi",
//       emp_id: "typ2",
//       emp_sal: 20000,
//       emp_designation: "html developer",
//     },
//   ];

//   // set header
//   res.setHeader("content-type", "application/json");
//   // send response to client
//   res.end(JSON.stringify(employees));
// }).listen(5000, err => {
//   if (err) throw err;
//   console.log("server is running in port number 5000");
// });

// all in one
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  let path = "";
  switch (req.url) {
    case "/":
      path += "./index.html";
      break;
    case "/style.css":
      path += "./style.css";
      res.setHeader("content-type", "text/css");
      break;
    case "/api":
      path += "./package.json";
      res.setHeader("content-type", "application/json");
      break;
    case "/video":
      path += "./vedio.mp4";
      res.setHeader("content-type", "video/mp4");
      break;
    case "/audio":
      path += "./song.mp3";
      res.setHeader("content-type", "audio/mp3");
      break;
    default:
      path += "./pagenotfound.html";
  }
  fs.createReadStream(path).pipe(res);
});
server.listen(5000, err => {
  if (err) throw err;
  console.log("server port running on 5000");
});
