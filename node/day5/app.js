const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.set("viewa", __dirname + "/views"); // isko path naam ke pakage se ache se likh sacte haiiiiiiiii

app.use("/", indexRouter)

app.listen(3000, ()=>{
    console.log("server is running")
})