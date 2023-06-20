const express = require('express');
const app = express();


//routes
app.get("/", (req, res)=>{
  res.sendFile(__dirname+ "/index.html");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + '/about.html')


})

app.listen(3000, ()=>{
    console.log(`server is running 3000`)
})