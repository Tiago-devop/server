const express = require("express");
const mongoose = require("mongoose");
const server = require("./authpassword");

// setup express server

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server started on port 5000"));

// set up routers

app.use("/snippet", require("./routes/snippetRouter"));

// connect to mongoDB

mongoose.connect(
  `mongodb+srv://${server.nameServer}:${server.password}@snippet-manager.2uczn.mongodb.net/main?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);
