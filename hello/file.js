const fs = require("fs");

// Sync....
// fs.writeFileSync("./test.txt", "Hey There");

// Async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// -------------- File Reading ----------------
//  Sync Reading
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// Async File Reading
// Async function not return the value , its except the callback function

// fs.readFile("./test.txt", "utf-8", (err, res) => {
//   if (err) console.log("error");
//   console.log(res);
// });

// Append

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));
