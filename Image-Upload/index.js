const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// this is kind of middleware
// const upload = multer({ dest: "upload/" });
const storage = multer.diskStorage({
  // in destination:  there is req that is originl req from user
  //    file: file that upload by user
  // cb: callback  function that have two argument one error and anther is destination
  destination: function (req, file, cb) {
    return cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.listen(PORT, () => console.log(`Server Started at localhost ${PORT} `));
