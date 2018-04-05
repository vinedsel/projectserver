const express = require("express");
const app = express();

app.post("/", function(req, res) {
  res.send("Data can be created using this method (POST).");
  console.log("POST was called.");
});

app.get("/", (req, res) => {
  console.log(req.headers);
  res.sendStatus(200);
});

app.put("/", function(req, res) {
  res.send("Use this (PUT) to update information.");
  console.log("PUT was called.");
});

app.delete("/", function(req, res) {
  res.send("Only use DELETE to remove the specified target.");
  console.log("DELETE was called.");
});

app.listen(3000, () => {
  console.log("Project Server is running on 3000");
});
