var express = require("express");
var app = express();
var path = require("path");

app.use("/public", express.static("public")); //serve public folder with /public prefix

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, function() {
  console.log("Magic is happening on port 3000!");
});
