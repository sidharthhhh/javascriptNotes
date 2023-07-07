const express = require("express");

const appp = express();

appp.get("/", (req, res)=>{
  res.send("app is working ......")
});

appp.listen(5000, ()=>{
   console.log("server is running here port 5000.........")
})