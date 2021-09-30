const http = require("http");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("error", err));

// Or you can simply use a connection uri
const app = express();

app.get("/", (req, res) => res.send("index"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("listening on 5000"));
