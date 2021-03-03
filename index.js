const express = require("express");
const mongoose = require("mongoose");

// setup express server

const app = express();

app.listen(5000, () => console.log("Server started on port 5000"));

app.get("/test", (req, res) => {
  res.send("Some data");
});
