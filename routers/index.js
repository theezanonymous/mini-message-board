const {Router} = require('express')
const express = require('express')
const indexRouter = Router()
const db = require('../db/queries.js')
indexRouter.use(express.urlencoded({ extended: true }));


indexRouter.get('/',async (req,res)=>{
    const messages = await db.getMessages()
    res.render("index", {messages: messages})
})
indexRouter.get("/new", async (req, res) => res.render("form"));
indexRouter.post("/new", async (req, res)=>{
    await db.insertMessage(req.body.name, req.body.message, (new Date()).toDateString() );
    res.redirect("/")
} )

module.exports = indexRouter