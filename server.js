const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "models.html"));

  let id = req.params.id;
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
