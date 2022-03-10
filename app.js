const http = require("http");
// let server = http.createServer(function (req, res) {
//   console.log(res);
//   res.end("ok");
// });
// const port = 8000;
// server.listen(port, err => {
//   if (err) throw err;
//   console.log("server is running on port number", port);
// });

http
  .createServer((req, res) => {
    res.end("hey client be happy i am giving response...😊");
  })
  .listen(5000, err => console.log(err, "server is running on 5000"));
