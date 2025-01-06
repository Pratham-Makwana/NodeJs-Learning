const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "url is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
    createdBy: req.user._id,
  });

  //   return res.json({ id: shortID });
  return res.render("home", {
    id: shortID,
  });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitedHistory.length,
    analytics: result.visitedHistory,
  });
}

module.exports = {
  generateNewShortURL,
  handleGetAnalytics,
};
