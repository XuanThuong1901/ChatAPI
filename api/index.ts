'use strict';
import { Request, Response } from "express";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const bodyparse = require("body-parser");

import authRoute from "./routes/auth.route";
import conversationRoute from "./routes/conversations.route";
import messageRoute from "./routes/messages.route";
// const authRoute = require("./routes/auth.route")
// const conversationRoute = require("./routes/conversations.route");
// const messageRoute = require("./routes/messages.route");
const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true},
  () => {
    console.log("Connected to MongoDB");
  }
);
//middleware
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extends: true}));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
