"use strict"

// 모듈
const express = require("express");
const bodyPaser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger")

const app = express();
dotenv.config();



//라우팅
const home = require("./src/routes/home")


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyPaser.json());
app.use(morgan("tiny",{ stream : logger.stream}))
//인식 잘되는 시스템
app.use(bodyPaser.urlencoded({extended: true}));

app.use("/", home);

module.exports = app;