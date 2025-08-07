const express = require('express')
const app = express()
const indexRouter = require('./routers/index.js')
const path = require('node:path')

const assetsPath = path.join(__dirname, "public");
app.set("views", path.join(__dirname, "views")); //Defines where to find our html/ejs files (views)
app.set("view engine", "ejs");

app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.listen(3000);