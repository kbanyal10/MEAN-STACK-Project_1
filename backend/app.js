const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Post = require("./models/post");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Kart:nmQeyocxttsEN9qW@cluster0.9axed.mongodb.net/postApp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DataBase Connect!");
  })
  .catch(() => {
    console.log("Not Connected!");
  });
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save();

  console.log(post);
  res.status(201).json({
    message: "Message Recieved Successfully!",
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "Hello",
      posts: documents,
    });
  });

});

module.exports = app;
