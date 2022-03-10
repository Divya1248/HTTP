import http from "http";
import fs from "fs";
import { parse } from "querystring";
import crypto from "crypto";

const server = http.createServer((req, res) => {
  // post method
  if (req.method === "POST") {
    //  set header
    let URL_ENCODED = "application/x-www-form-urlencoded";
    if (req.headers["content-type"] === URL_ENCODED) {
      // event
      let body = "";
      req.on("data", chunk => {
        body += chunk;
      });
      // end event
      req.on("end", _ => {
        (res.statusCode = 201),
          (res.statusMessage = "Created"),
          res.end("successfully logged in.....");
        let finalParsedBody = parse(body);
        // =====hashing the password by using crypto===========//
        let passwordhashed = finalParsedBody.password;
        let hashed = crypto
          .createHmac("sha256", passwordhashed)
          .update("updating password")
          .digest("hex");
        console.log(hashed);
        // =====end of crypto===========//
      });
    } else {
      res.end(null);
    }
  }
  //   =================end=======================
  else {
    // getting data getmethod
    if (req.url === "" || req.url === "/") {
      res.statusCode = 200;
      res.statusMessage = "ok";
      // content-type === wrapped with double quotes becaues inside object we can't use -(hyphen)  or we can use bracket notation [content-type]

      res.setHeader("content-type", "text/html");
      fs.createReadStream("./post.html", "utf-8").pipe(res);
    } else if (req.url === "/style.css") {
      //   instead of using three lines as statuscode , msg directly use writehead with three parameter
      res.writeHead(200, "ok", { "content-type": "text/css" });
      fs.createReadStream("./post.css", "utf-8").pipe(res);
    } else {
      // not found
      res.statusCode = 404;
      res.statusMessage = "not found";
      res.end("<h1>Page not found</h1>");
    }
  }
});
server.listen(5000, err => {
  if (err) throw err;
  console.log("server is running on port number is 5000");
});
