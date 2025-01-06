const express = require("express");
const {
  generateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", generateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
