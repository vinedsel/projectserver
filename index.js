const express = require("express");
const app = express();

app.post("/", function(req, res) {
  res.send("Data can be created using this method (POST).");
});

app.get("/", function(req, res) {
  res.send("GET is used to read information.");
});

app.put("/", function(req, res) {
  res.send("Use this (PUT) to update information.");
});

app.delete("/", function(req, res) {
  res.send("Only use DELETE to remove the specified target.");
});

app.listen(3000, () => {
  console.log("Project Server is running on 3000");
});
