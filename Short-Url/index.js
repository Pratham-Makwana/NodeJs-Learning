const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const urlRoute = require("./routes/urlRoutes");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/userRoutes");
const { connectToMongoDB } = require("./connect");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");
const URL = require("./models/urlModel");
const app = express();

const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/shortUrl").then(() =>
  console.log("MongoDb Connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

// Routes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log("Server Connected"));
