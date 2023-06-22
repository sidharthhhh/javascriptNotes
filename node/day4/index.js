const express = require('express');

const app = express();
const indexRouter = require("./routes/index");

app.use("/", indexRouter);


app.listen(3000, (req,res)=>{
    console.log("server is runing")
})