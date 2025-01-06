const express = require("express");
const {
  handleUserSignup,
  handleUserlogin,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserlogin);

module.exports = router;
