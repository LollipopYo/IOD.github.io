const express = require("express");
const router = express.Router();
const user = require ("./user");
const calculator = require("./calculator");


router.get("/test", (req, res) => {
  res.send("Hello World!");
});

router.get("/test2", (req, res) => {
  res.send("Second test");
});

router.get("/sayHi", (req, res) => {
  res.send("Hi!");
});

router.use("/user", user);
router.use("/calculator", calculator);
module.exports = router;