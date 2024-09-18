const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
console.log(req.query);
const {num1, num2} = req.query;
const result = parseInt(num1) + parseInt(num2);
  res.send( {result} );
});

router.get("/minus", (req, res) => {
  console.log(req.query);
  const { num1, num2 } = req.query;
  const result = parseInt(num1) - parseInt(num2);
  res.send({ result });
});


module.exports = router;