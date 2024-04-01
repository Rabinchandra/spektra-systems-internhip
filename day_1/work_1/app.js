const express = require("express");
const app = express();

// Set the view engine as ejs
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Parse the body of the incoming request

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/get-result", (req, res) => {
  res.render("result", { result: req.body });
});

app.listen(3000, () => console.log("Running on port 3000"));
