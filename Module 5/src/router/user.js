const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is user route");
});

router.get("/Add", (req, res) => {
  res.send("userAdd route");
});

module.exports = router;
