const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "adasd2323",
      title: "Testing",
      content: "Hello from the server",
    },
    {
      id: "lkmw992",
      title: "Testing 2",
      content: "Hello again from the server",
    },
  ];
  res.status(200).json({
    message: "Hello",
    posts: posts,
  });
});

module.exports = app;
