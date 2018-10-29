const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const colors = require("colors");
const routes = require("./routes");

const port = 3000;
const app = express();

let store = {
  posts: [
    {
      name: "Top 10 ES6 Features every Web Developer must know",
      url: "https://webapplog.com/es6",
      text:
        "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.",
      comments: [
        {
          text: "Cruel…..var { house, mouse} = No type optimization at all"
        },
        {
          text: "I think you’re undervaluing the benefit of ‘let’ and ‘const’."
        },
        {
          text: "(p1,p2)=>{ … } ,i understand this ,thank you !"
        }
      ]
    }
  ]
};

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  req.store = store;
  next();
});

app.get("/posts", routes.posts.getPosts);
app.post("/posts", routes.posts.addPost);
app.post("/posts/:id", routes.posts.updatePost);
app.post("/posts/:id", routes.posts.removePost);

app.get("/posts/:id/comments", routes.comments.getComments);
app.post("/posts/:id/comments", routes.comments.addComment);
app.put("/posts/:pId/comments/:cId", routes.comments.updateComment);
app.delete("/posts/:pId/comments/:cId", routes.comments.removeComment);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`.green);
});
