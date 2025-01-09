const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const Blog = require("./models/blogModel");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRouter");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogs")
  .then((e) => console.log("db connected"));

// view engine for ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
// by default express don't provide access to the static assets
// express hame koi bhi static asstes ko access karne nai deti
// now public floder use as a static
app.use(express.static(path.resolve("./public")));
// routes
app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// server listen
app.listen(PORT, () => {
  console.log(`Server Listened  at ${PORT}`);
});
