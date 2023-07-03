const express = require("express");
const app = express();

const indexRoute = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoute);

app.listen(3000, () => {
    console.log("server running on port 3000...");
});
