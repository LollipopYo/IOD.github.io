const express = require("express");
const {
  getPosts,
  addPost,
  changePostStatus,
  updatePostState,
} = require("../controller/postController");
const router = express.Router();

router.get("/", (req, res) => {
  const posts = getPosts();
  console.log("posts", posts);
  res.send({ result: posts });
});


router.post("/", (req, res) => {
  const body = req.body;
  const post = addPost(body);
  res.send({ result: post });
});


router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { updated } = req.body;
    updatePostState(id, updated);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    changePostStatus(id);
    res.sendStatus(204);
  } catch (e) {
    res.status(404).send({ error: "Post not found" });
  }
});

module.exports = router;
