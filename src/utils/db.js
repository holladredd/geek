const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/geek-info")

  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("failed");
  });
