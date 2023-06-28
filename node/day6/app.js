const express  = require("express");
const app = express();

const indexRouter= require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public")); // due to this "/" ka directly matlab ki public ma jaaigaa

app.use("/", indexRouter)

app.listen(3000, ()=>{
    console.log("server is running")
})