const express = require("express");
const mongoose = require("mongoose");

// setup express server

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server started on port 5000"));

// set up routers

app.use("/snippet", require("./routes/snippetRouter"));