//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.set("view engine", "ejs");

require("./config/connectdb").connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/routes")); //Why we need this route

const User = require("./models/user");

//Middleware
const middleware = (req, res, next) => {
  console.log("This is my middleware");
  next();
};

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
