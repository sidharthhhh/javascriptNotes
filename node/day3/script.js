const express = require('express');

const app = express();

console.log(__dirname) // jab bhi  starting se path chahaiye to dir ka use karte haiii
console.log(__filename); // jab bhi file tak ka path chahaiye to __filename ka use karte haii


app.get("/", (req, res, next)=>{
   res.sendFile(__dirname + "/index.html")
})
app.get("/about.html", (req, res, next)=>{
    res.sendFile(__dirname + "/about.html")
 })
 app.get("/service.html", (req, res, next)=>{
    res.sendFile(__dirname + "/service.html")
 })
 app.get("/product.html", (req, res, next)=>{
    res.sendFile(__dirname + "/product.html")
 })
app.listen(3000, ()=>{
    console.log("server is running");
})