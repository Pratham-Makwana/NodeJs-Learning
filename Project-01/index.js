const express = require("express");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");
const userRouter = require("./routes/userRoute");
const app = express();
const PORT = 3000;

// const fs = require("fs");
// const mongoose = require("mongoose");
// const users = require("./MOCK_DATA.json");

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/node-demo").then(() =>
  console.log("Connected")
);

// MiddleWare in express
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/user", userRouter);
app.listen(PORT, () => console.log("Server Started"));

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);

//   return res.json(user);
// });

// ------------- Insert Into The Json File -------------------
// app.post("/api/users/", (req, res) => {
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     res.status(400).json({ msg: "All Fields Required" });
//   }
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "success ", id: users.length });
//   });
// });

// app.patch("/api/users/:id",(req,res)=> {
//     // TODO: update  user
//     return res.json({status: "pending"})
// })
// app.delete("/api/users/:id",(req,res)=> {
//     // TODO: delete  user
//     return res.json({status: "pending"})
// })
