const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();

app.get('/users', (req, res)=>{
    return res.json(users)
})

app.listen(3000, ()=> console.log("server running"))