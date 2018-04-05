const express = require("express");
const app = express();

app.post("/", function(req, res) {
  res.send("You successfully created a POST route!");
});

app.get("/", function(req, res) {
  res.send("You successfully created a GET route!");
});

app.put("/", function(req, res) {
  res.send("You successfully created a PUT route!");
});

app.delete("/", function(req, res) {
  res.send("You successfully created a DELETE route!");
});

app.listen(3000, () => {
  console.log("Simple Server is running on 3000");
});
