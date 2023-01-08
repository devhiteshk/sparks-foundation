const express = require("express");
//import packages
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./api/api");

//require mongoose
const mongoose = require("mongoose");

// import middleware and config
const { unknownEndpoint, errorHandler } = require("./middleware/middleware");
const { MONGODB_URI, PORT } = require("./config/config");

// set mongoose and connect data base
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI).then(console.log("connected to DB"));

const app = express();
app.use(cors());

// use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// endpoints
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", router);

app.use(unknownEndpoint);
app.use(errorHandler);

// listen to server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
