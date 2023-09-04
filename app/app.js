"use strict"

// 모듈
const express = require("express");
const bodyPaser = require("body-parser");
const app = express();

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyPaser.json());
//인식 잘되는 시스템
app.use(bodyPaser.urlencoded({extended: true}));

//라우팅
const home = require("./src/routes/home")
app.use("/", home);

module.exports = app;