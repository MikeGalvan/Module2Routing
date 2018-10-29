module.exports = {
  getComments(req, res) {
    console.log(`GET -> /comments`.yellow);
    res.status(200);
    res.send(req.store.posts[req.params.id].comments);
  },
  addComment(req, res) {
    console.log(`POST -> /comments`.yellow);
    const newComment = req.body;
    const postComments = req.store.posts[req.params.id].comments;
    const cId = postComments.length;
    postComments.push(newComment);
    res.status(201);
    res.send(`Comment was created with id: ${cId}`);
  },
  updateComment(req, res) {
    console.log(`PUT -> /comments`.yellow);
    req.store.posts[req.params.pId].comments[req.params.cId] = Object.assign(
      req.store.posts[req.params.pId].comments[req.params.cId],
      req.body
    );
    res.status(200);
    res.send(req.store.posts[req.params.pId].comments[req.params.cId]);
  },
  removeComment(req, res) {
    console.log(`DELETE -> /comments`.yellow);
    req.store.posts[req.params.pId].comments.splice(req.params.cId, 1);
    res.status(204);
    res.send(`The comments were deleted successfully.`);
  }
};
