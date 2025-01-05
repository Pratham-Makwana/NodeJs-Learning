const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.end("hello from home page");
});

app.get("/about", (req, res) => {
  return res.end("hello from about page ");
});

app.listen(8001, () => console.log("Hey!, Server Started"));

//  ------------- With the help of the expreee js we can rid of this long code --------------------------
// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.url} New Request\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home Page");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hii, ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are yout results for " + search);
//         break;
//       default:
//         res.end("Not Found! 404");
//     }
//     // res.end("Hello From Server");
//   });
//   //   console.log(req.headers);
//   //   console.log("New Req Rec.");
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));
