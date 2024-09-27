const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

router.get("/", (req, res) => {
  res.send("this is user route");
});

router.get("/Add", (req, res) => {
  res.send("userAdd route");
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((user) => user.id == userId);
  res.send({result: {user}});
});

router.post("/", (req, res) => {
  const { name, country } = req.body;
  console.log('req.body', req.body);
 const id = Math.max (...users.map((user)=>user.id)) +1;
 const newUser = {
  id,
  name,
  country,
 };
  users.push (newUser);
  console.log("users", newUser);
  res.send({ result: { user: newUser } });
});



router.put("/:id", (req, res) => {
  const resourceId = req.params.id;
  console.log("resourceId", resourceId);
  const updatedData = req.body;

  if (!users[resourceId]) {
    return res.status(404).json({ error: "Resource not found" });
  }

  users[resourceId] = {
    ...users[resourceId],
    ...updatedData,
  };

  res.json(users[resourceId]);
  
});





module.exports = router;
