module.exports = {
  getPosts(req, res) {
    console.log(`GET -> /posts`.yellow);
    res.status(200);
    res.send(req.store.posts);
  },
  addPost(req, res) {
    console.log(`POST -> /posts`.yellow);
    const newPost = req.body;
    let allPosts = req.store.posts;
    const pId = allPosts.length;
    allPosts.push(newPost);
    res.status(201);
    res.send(`Post created with id: ${pId}`);
  },
  updatePost(req, res) {
    console.log(`PUT -> /posts`.yellow);
    req.store.posts[req.params.id] = Object.assign(
      req.store.posts[req.params.id],
      req.body
    );
    res.status(200);
    res.send(allPosts[req.params.id]);
  },
  removePost(req, res) {
    console.log(`DELETE -> /posts`.yellow);
    let allPosts = req.store.posts;
    allPosts.splice(req.params.id, 1);
    res.status(204);
    res.send(`The Post was deleted successfully`);
  }
};
// router.get("/", (req, res) => {
//   console.log(`GET -> /posts`.yellow);
//   res.status(200);
//   res.send(`Respuesta GET para /posts/`);
// });

// router.post("/", (req, res) => {
//   console.log(`POST -> /posts`.yellow);
//   res.status(200);
//   //   res.send(`Respuesta POST para /posts/ ${req.body}`);
//   res.send(`${req.body}`);
// });

// router.put("/:id", (req, res) => {
//   console.log(`PUT -> /posts`.yellow);
//   res.status(200);
//   //   res.send(`Respuesta POST para /posts/ ${req.body}`);
//   res.send(`${req.body}`);
// });

// router.delete("/:id", (req, res) => {
//   console.log(`DELETE -> /posts`.yellow);
//   res.status(204);
//   //   res.send(`Respuesta POST para /posts/ ${req.body}`);
//   res.send(`${req.body}`);
// });

// module.exports = router;
